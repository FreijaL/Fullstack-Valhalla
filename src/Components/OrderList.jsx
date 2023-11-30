// OrderList.js
import React from 'react';
import Order from './Order';
import style from './OrderList.module.scss'

//Hela orderlistan som mappas in
const OrderList = ({ orders }) => {
  return (
    <div className={style.orderList}>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;