'use client';

import { useState } from 'react';
import { useGetTopCoinsQuery } from '@/entities/coin/api/coingeckoApi';
import { FilterButtons } from '@/features/filter-coins/ui/FilterButtons';
import { SearchCoin } from '@/features/search-coin/ui/SearchCoin';
import { GlobalStats } from '@/widgets/GlobalStats';
import { MarketTable } from '@/widgets/MarketTable';

function updateFavoritesFromStorage(): string[] {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
}

export default function MarketPage(): React.JSX.Element {
  const { data, isLoading, error } = useGetTopCoinsQuery();
  const [filterData, setFilterData] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>(() => updateFavoritesFromStorage());

  const toggleFavorite = (coinId: string): void => {
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
      <FilterButtons 
        filterData={filterData} 
        setFilterData={setFilterData} 
        favorites={favorites} 
      />
      <SearchCoin value={searchTerm} onChange={setSearchTerm} />
      <MarketTable 
        data={data} 
        filterData={filterData} 
        favorites={favorites} 
        toggleFavorite={toggleFavorite}
        searchTerm={searchTerm}
      />
    </div>
  );
}