import React from 'react';
import Order from './KitchenOrder';
import style from './KitchenOrderList.module.scss'
import { useSelector } from 'react-redux';

//Hela orderlistan som mappas in
const OrderList = () => {
  const kitchenOrders = useSelector((state) => state.staff.kitchenOrders)

  return (
    <div className={style.orderList}>
      {kitchenOrders &&
      kitchenOrders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;