// HistorySearch.jsx
import React from 'react';
import style from './HistorySearch.module.scss';

const HistorySearch = ({ onSearch, searchTerm }) => {
  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        className={style.searchInput}
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Historik"
      />
      <button className={style.searchButton} onClick={() => onSearch(searchTerm)}>
        Sök
      </button>
    </div>
  );
};

export default HistorySearch;
