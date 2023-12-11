import React from 'react';
import style from './HistoryOrderList.module.scss';
import Order from './HistoryOrder';
import { useSelector } from 'react-redux';

const HistoryOrderList = () => {

  const orderHistory = useSelector((state) => state.staff.orderHistory)
  console.log(orderHistory);

    return (
        <div className={style.orderList}>
        {orderHistory &&
        orderHistory.map((order) => (
          <Order 
          key={order.id} 
          order={order} />
        ))
        }
      </div>
    )
}

export default HistoryOrderList;