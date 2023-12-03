// OrderList.js
import React from 'react';
import ServiceOrder from './ServiceOrder';
import style from './ServiceOrderList.module.scss'

//Hela orderlistan som mappas in
const ServiceOrderList = ({ orders, onOrderClick }) => {
  return (
    <div className={style.orderList}>
      {orders.map((order) => (
        <ServiceOrder key={order.id} order={order} onOrderClick={onOrderClick} />
      ))}
    </div>
  );
};

export default ServiceOrderList;