import React, { useState } from 'react';
import style from './HistorySearch.module.scss';

const HistorySearch= ({ onSearch }) => {

      const [searchTerm, setSearchTerm] = useState('');
    
      const handleSearch = (e) => {
            // e.preventDefault(); 
            // onSearch(searchTerm);
            console.log('search button pressed');
      };
    
      return (
        <div className={style.searchContainer}>
          <input
            type="text"
            className={style.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Historik"
          />
          <button className={style.searchButton} onClick={handleSearch}>
            Sök
          </button>
        </div>
      );
    };

export default HistorySearch;