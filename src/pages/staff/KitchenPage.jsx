//KitchenPage.jsx

import style from './KitchenPage.module.scss';
import React from 'react';
import OrderList from '../../Components/OrderList';

function KitchenPage() {
  // State management behövs
 //Fixar statisk lista sålänge
  const orders = [
    // ...static list of orders
  ];

  return (
    <div className="order-board">
      <h1>Valhalla Pizza</h1>
      <OrderList orders={orders} />
    </div>
  );
};

export default KitchenPage;
