'use client';

import styles from './FilterButtons.module.css';

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
    <div className={styles.container}>
      {filters.map((filter) => (
        <button 
          key={filter.id} 
          onClick={() => setFilterData(filter.id)}
          className={`${styles.button} ${filterData === filter.id ? styles.active : ''}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}