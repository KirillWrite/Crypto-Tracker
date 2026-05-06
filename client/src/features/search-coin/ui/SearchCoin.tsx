'use client';

import styles from './SearchCoin.module.css';

interface SearchCoinProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchCoin({ value, onChange }: SearchCoinProps): React.JSX.Element {
  return (
    <div className={styles.searchContainer}>
      <input 
        type="text" 
        placeholder="Поиск по названию" 
        value={value} 
        onChange={(event) => onChange(event.target.value)} 
      />
    </div>
  );
}