import style from './KitchenPage.module.scss';
import React from 'react';
import KitchenOrderList from '../../Components/KitchenOrderList';
import Header from '../../Components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { calculatePizzaInKitchen, filterKitchenStatus } from '../../app/staffSlice';
import { useEffect } from 'react';

function KitchenPage() {
  const dispatch = useDispatch();

  const kitchenOrders = useSelector((state) => state.staff.kitchenOrders)
  const pizzaCount = useSelector((state) => state.staff.pizzaCount)
  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://1x78ct0zxk.execute-api.eu-north-1.amazonaws.com/api/orders');
      const orderHistory = await response.json();

      dispatch(filterKitchenStatus(orderHistory.orders));
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (kitchenOrders.length > 0) {
      dispatch(calculatePizzaInKitchen())
    }
  }, [kitchenOrders]);

  const totalNumberOfitems = pizzaCount;
  const totalNumberOfOrders = kitchenOrders.length;

  return (
    <>
      <Header />
      <div className={style.kitchenContainer}>
        <h2 className={style.kitchenCounter}>Pågående ordrar: {totalNumberOfOrders} - Antal Pizzor: {totalNumberOfitems}</h2>
        <KitchenOrderList/>
      </div>
    </>
  );
};

export default KitchenPage;
