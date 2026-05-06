'use client';

export function FilterButtons({ filterData, setFilterData, favorites }): React.JSX.Element {
  const filters = [
    { id: 'all', label: 'Все' },
    { id: 'favorites', label: 'Избранные' },
    { id: 'growing', label: 'Растущие' },
    { id: 'falling', label: 'Падающие' },
  ];

  console.log('FilterButtons rendered with filterData:', filterData);

  return (
    <div>
      {filters.map((filter) => (
        <button key={filter.id} onClick={() => setFilterData(filter.id)}>
          {filter.label}
        </button>
      ))}
    </div>
  );
}
