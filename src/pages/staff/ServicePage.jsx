import style from './ServicePage.module.scss';
import React, { useState } from 'react';
import ServiceOrderList from '../../Components/ServiceOrderList';
import ServiceOrderModal from '../../Components/ServiceOrderModal';
import Header from '../../Components/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  
  // const totalNumberOfOrders = orders.length;

  //Modal för extra orderinfo
  // const [selectedOrder, setSelectedOrder] = useState(null);

  // const handleOrderClick = (order) => {
  //   setSelectedOrder(order);
  // };

  // const handleCloseModal = () => {
  //   setSelectedOrder(null);
  // };
  
    return (
      <>
        <Header />
        <div className={style.serviceContainer}>
          {/* <h2 className={style.serviceCounter}>Pågående ordrar: {totalNumberOfOrders}</h2> */}
          <ServiceOrderList 
          // onOrderClick={handleOrderClick}
          />
          {/* {selectedOrder && (
          <ServiceOrderModal order={selectedOrder} onClose={handleCloseModal} />
        )} */}
        </div>
      </>
    );
};

export default ServicePage;
