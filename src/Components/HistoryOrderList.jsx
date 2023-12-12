import React from 'react';
import style from './HistoryOrderList.module.scss';
import Order from './HistoryOrder';
import { useDispatch, useSelector } from 'react-redux';

const HistoryOrderList = ({ orders }) => {
  const orderHistory = useSelector((state) => state.staff.orderHistory);
  console.log(orderHistory);


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