import React from 'react';
import style from './HistoryOrderList.module.scss';
import Order from './HistoryOrder';

const HistoryOrderList = ({ orders }) => {

  return (
    <div className={style.orderList}>
      {orders.map((order) => (
        <Order 
          key={order.id} 
          order={order} 
        />
      ))}
    </div>
  );
}


export default HistoryOrderList;