'use client';

import { CoinMarket } from '@/entities/coin/model/types';
import Image from 'next/image';
import { useMemo } from 'react';
import styles from './MarketTable.module.css';

interface MarketTableProps {
  data: CoinMarket[] | undefined;
  filterData: string;
  toggleFavorite: (id: string) => void;
  favorites: string[];
  searchTerm: string;
}

export function MarketTable({ data, filterData, toggleFavorite, favorites, searchTerm }: MarketTableProps): React.JSX.Element {
  // фильтр
  const filteredData = useMemo(() => {
    if (!data) return [];
    let filtered = [...data];

    // фильтр по поиску
    if (searchTerm) {
      filtered = filtered.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    // фильтр по категориям
    switch (filterData) {
      case 'favorites':
        filtered = filtered.filter((coin) => favorites.includes(coin.id));
        break;
      case 'growing':
        filtered = filtered.filter((coin) => coin.price_change_percentage_24h_in_currency > 0);
        break;
      case 'falling':
        filtered = filtered.filter((coin) => coin.price_change_percentage_24h_in_currency < 0);
        break;
      default:
        break;
    }
    return filtered;
  }, [data, searchTerm, filterData, favorites]);

  return (
    <div>
      <div className={styles.coinRow}>
        <div>#</div>
        <div>Название</div>
        <div>Цена</div>
        <div>1 час</div>
        <div>24 часа</div>
        <div>7 дней</div>
        <div>Капитализация</div>
        <div>Объем 24 часа</div>
        <div>Тренд 7 дней</div>
        <div>Избранное</div>
      </div>
      {filteredData?.length === 0 ? (
        <p>Монета не найдена</p>
      ) : (
        <div>
          {filteredData.map((coin) => (
            <div key={coin.id} className={styles.coinRow}>
              <div>{coin.market_cap_rank}</div>
              <div>
                <Image src={coin.image} alt={coin.name} width={20} height={20} />
                {coin.name} ({coin.symbol.toUpperCase()})
              </div>
              <div>${coin.current_price?.toLocaleString()}</div>
              <div className={`${coin.price_change_percentage_1h_in_currency > 0 ? styles.positive : styles.negative} ${styles.box}`}>
                {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
              </div>
              <div className={`${coin.price_change_percentage_24h_in_currency > 0 ? styles.positive : styles.negative} ${styles.box}`}>
                {coin.price_change_percentage_24h_in_currency?.toFixed(2)}%
              </div>
              <div className={`${coin.price_change_percentage_7d_in_currency > 0 ? styles.positive : styles.negative} ${styles.box}`}>
                {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
              </div>
              <div>${coin.market_cap?.toLocaleString()}</div>
              <div>${coin.total_volume?.toLocaleString()}</div>
              <div>Тренд</div>
              <button onClick={() => toggleFavorite(coin.id)}>{favorites.includes(coin.id) ? '⭐' : '☆'}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
