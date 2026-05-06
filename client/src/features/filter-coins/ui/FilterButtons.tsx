'use client';

interface FilterButtonsProps {
  filterData: string;
  setFilterData: (filter: string) => void;
  favorites: string[];
}

export function FilterButtons({ filterData, setFilterData, favorites }: FilterButtonsProps): React.JSX.Element {
  const filters = [
    { id: 'all', label: 'Все' },
    { id: 'favorites', label: `Избранные (${favorites.length})` },
    { id: 'growing', label: 'Растущие' },
    { id: 'falling', label: 'Падающие' },
  ];

  return (
    <div>
      {filters.map((filter) => (
        <button 
          key={filter.id} 
          onClick={() => setFilterData(filter.id)}
          className={filterData === filter.id ? 'active' : ''}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}