// HistoryPage.jsx
import React, { useState, useEffect } from 'react';
import style from './HistoryPage.module.scss';
import OrderList from '../../Components/HistoryOrderList';
import Search from '../../Components/HistorySearch';
import Header from '../../Components/Header';
import { useSelector } from 'react-redux';

function HistoryPage() {
  const orders = useSelector((state) => state.staff.orderHistory);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(orders);

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredData = orders.filter((order) => (
      order.orderNumber.toLowerCase().includes(lowercasedFilter) ||
      order.orderComment.toLowerCase().includes(lowercasedFilter)
      // Add more conditions here if needed
    ));
    setFilteredOrders(filteredData);
  }, [searchTerm, orders]);

  return (
    <div className={style.historyPage}>
      <Header />
      <div className={style.historyContainer}>
        <Search onSearch={setSearchTerm} searchTerm={searchTerm} />
        <OrderList orders={filteredOrders} />
      </div>
    </div>
  );
}

export default HistoryPage;
