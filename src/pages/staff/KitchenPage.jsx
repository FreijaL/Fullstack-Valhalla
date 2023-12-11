//KitchenPage.jsx

import style from './KitchenPage.module.scss';
import React from 'react';
import KitchenOrderList from '../../Components/KitchenOrderList';
import Header from '../../Components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { filterKitchenStatus } from '../../app/staffSlice';
import { useEffect } from 'react';

function KitchenPage() {
  const dispatch = useDispatch();

  const kitchenOrders = useSelector((state) => state.staff.kitchenOrders)
  console.log("Kitchen:",kitchenOrders);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://1x78ct0zxk.execute-api.eu-north-1.amazonaws.com/api/orders');
      const orderHistory = await response.json();

      dispatch(filterKitchenStatus(orderHistory.orders));
    }

    fetchData();
  }, []);
  
  // BEHÖVER LÖSA STATE MANAGEMENT MED REDUX 


  // const calculateTotalitems = (orders) => {
  //   return orders.reduce((total, order) => {
  //     const itemsInOrder = order.items || [];
  //     const totalitemsInOrder = itemsInOrder.reduce((orderTotal, pizza) => orderTotal + pizza.quantity, 0);
  //     return total + totalitemsInOrder;
  //   }, 0);
  // };

  // const totalNumberOfitems = calculateTotalitems(orders);
  // const totalNumberOfOrders = orders.length;



  return (
    <>
      <Header />
      <div className={style.kitchenContainer}>
        <h2 className={style.kitchenCounter}>Pågående ordrar: {} - Antal Pizzor: {}</h2>
        <KitchenOrderList/>
      </div>
    </>
  );
};

export default KitchenPage;
