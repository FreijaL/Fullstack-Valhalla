//Historypage.jsx
import style from './HistoryPage.module.scss';
import React from 'react';
import OrderList from '../../Components/HistoryOrderList';
import Search from '../../Components/HistorySearch'
import Header from '../../Components/Header';

function HistoryPage() {
  return (
    <div className={style.historyPage}>
      <Header />
      <div className={style.historyContainer}>
      <Search />
      <OrderList/>
      </div>
    </div>
  );
};

export default HistoryPage;
