import { useState } from 'react';

import styles from './SearchBox.module.scss';
import { useNavigate } from 'react-router-dom';


export const SearchBox = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/search?q=${search}`);
      setSearch('');
    }
  };

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Buscar..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};
