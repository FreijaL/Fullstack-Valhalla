import React from 'react';
import ServiceOrder from './ServiceOrder';
import style from './ServiceOrderList.module.scss'
import { useSelector } from 'react-redux';

//Hela orderlistan som mappas in
const ServiceOrderList = () => {

  const serviceOrders = useSelector((state) => state.staff.serviceOrders)

  return (
    <div className={style.orderList}>
      {serviceOrders &&
      serviceOrders.map((order) => (
        <ServiceOrder key={order.id} order={order}/>
      ))}
    </div>
  );
};

export default ServiceOrderList;