import React from 'react';
import Order from './KitchenOrder';
import style from './KitchenOrderList.module.scss'

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