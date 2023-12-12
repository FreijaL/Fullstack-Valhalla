// HistoryPage.jsx
import React, { useState, useEffect } from 'react';
import style from './HistoryPage.module.scss';
import OrderList from '../../Components/HistoryOrderList';
import Search from '../../Components/HistorySearch';
import Header from '../../Components/Header';
import { useSelector } from 'react-redux';

function HistoryPage() {
  //Tar in alla ordrar från Redux
  const orders = useSelector((state) => state.staff.orderHistory);
  //Termen som ska användas till sökfilter
  const [searchTerm, setSearchTerm] = useState('');
  //Filtrerade listan som skall returneras
  const [filteredOrders, setFilteredOrders] = useState([]);


  //Sökfilter
  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredData = orders.filter((order) => {
      
      // Kollar ifall söktermen matchar ett ordernummer
      const orderMatches = order.orderNumber.toLowerCase().includes(lowercasedFilter)

      // Kollar ifall söktermen matchar någon produkt
      const itemsMatch = order.items && order.items.some(item => 
        item.itemName.toLowerCase().includes(lowercasedFilter) || 
        (item.comment && item.comment.toLowerCase().includes(lowercasedFilter))
      );

      //Returnerar en order till filtret antingen baserat på ordernummer eller produktnamn
      return orderMatches || itemsMatch;
    });

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
