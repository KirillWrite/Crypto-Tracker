'use client';

import { CoinMarket } from '@/entities/coin/model/types';
import { useMemo, useState } from 'react';

export function SearchCoinTable({ data, filterData, toggleFavorite, favorites = [] }: { data:CoinMarket[] | undefined ; filterData: string; toggleFavorite: (id: string) => void; favorites: string[] }): React.JSX.Element {
  const [searchState, setSearchState] = useState('');
  
  // фильтр
  const filteredData = useMemo(() => {
    if (!data) return [];
    let filtered = [...data];

    // фильтр по поиску
    if (searchState) {
      filtered = filtered.filter((coin) => coin.name.toLowerCase().includes(searchState.toLowerCase()));
    }
    // фильтр по категориям
    switch (filterData) {
      case 'favorites':
        filtered = filtered.filter((coin) => favorites.includes(coin.id));
        break;
      case 'growing':
        filtered = filtered.filter((coin) => coin.price_change_percentage_24h > 0);
        break
      case 'falling':
        filtered = filtered.filter((coin) => coin.price_change_percentage_24h < 0);
        break
      default:
        break;
    }
    return filtered;
  }, [data, searchState, filterData, favorites]);



  return (
    <div>
      <input type="text" placeholder='Поиск по названию' value={searchState} onChange={(event) => setSearchState(event.target.value)} />
        {filteredData?.length === 0 ? (
          <p>Монета не найдена</p>
        ) : (
          <ul>
            {filteredData.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol.toUpperCase()}) - ${coin.current_price}
                <button onClick={() => toggleFavorite(coin.id)}>
                  {favorites.includes(coin.id) ? '-' : '+'}
                </button>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}
    