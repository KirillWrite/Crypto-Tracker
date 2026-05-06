'use client';
import { useGetTopCoinsQuery } from '@/entities/coin/api/coingeckoApi';
import { FilterButtons } from '@/widgets/FilterButtons/FilterButtons';
import { GlobalStats } from '@/widgets/GlobalStats/ui/GlobalStats';
import { SearchCoinTable } from '@/widgets/SearchCoinTable/SearchCoinTable';
import { useEffect, useState } from 'react';

export default function MarketPage(): React.JSX.Element {
  const { data, isLoading, error } = useGetTopCoinsQuery();
  const [filterData, setFilterData] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (coinId: string) => {
    let updatedFavorites;
    if (favorites.includes(coinId)) {
      updatedFavorites = favorites.filter((id) => id !== coinId);
    } else {
      updatedFavorites = [...favorites, coinId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (isLoading) {
    return <div>Loading top coins...</div>;
  }
  if (error) {
    return <div>Failed to load market data</div>;
  }

  return (
    <div>
      <h1>Top Coins</h1>
      <GlobalStats />
      <FilterButtons filterData={filterData} setFilterData={setFilterData} favorites={favorites} />
      <SearchCoinTable data={data} filterData={filterData} favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}
