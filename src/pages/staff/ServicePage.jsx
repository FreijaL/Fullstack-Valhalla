import style from './ServicePage.module.scss';
import React from 'react';
import ServiceOrderList from '../../Components/ServiceOrderList';
import Header from '../../Components/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterServiceStatus } from '../../app/staffSlice';

function ServicePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://1x78ct0zxk.execute-api.eu-north-1.amazonaws.com/api/orders');
      const orderHistory = await response.json();

      dispatch(filterServiceStatus(orderHistory.orders));
    }

    fetchData();
  }, []);

  const serviceOrders = useSelector((state) => state.staff.serviceOrders)
  
  const totalNumberOfOrders = serviceOrders.length;
  
    return (
      <>
        <Header />
        <div className={style.serviceContainer}>
          <h2 className={style.serviceCounter}>Pågående ordrar: {totalNumberOfOrders}</h2>
          <ServiceOrderList/>
        </div>
      </>
    );
};

export default ServicePage;
