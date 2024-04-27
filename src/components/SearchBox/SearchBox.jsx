import React, { useState } from 'react';

import { useLocation } from "wouter";

import styles from './SearchBox.module.css';

export const SearchBox = () => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useLocation();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setLocation(`/SearchList/${search}`)
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
