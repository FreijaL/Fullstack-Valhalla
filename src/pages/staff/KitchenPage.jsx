//KitchenPage.jsx

import style from './KitchenPage.module.scss';
import React from 'react';
import OrderList from '../../Components/OrderList';
import Header from '../../Components/Header';

function KitchenPage() {
  // State management behövs
 //Fixar statisk lista sålänge
  const orders = [
    {
      id: '#58233',
      timeRemaining: '30:45',
      pizzas: [
        { id: 'p1', name: 'Vesuvio x 1' },
        { id: 'p2', name: 'Margherita x 1' },
        { id: 'p3', name: 'Extra ost' },
      ],
      isCompleted: false,
      comment: 'Lägg den extra osten bredvid tack!'
    },
    {
      id: '#58234',
      timeRemaining: '15:45',
      pizzas: [
        { id: 'p4', name: 'Vesuvio x 1' },
        { id: 'p5', name: 'Hawaii x 2' },
        { id: 'p6', name: 'Ingen lök' },
      ],
      isCompleted: false,
      comment: 'Mindre lök än vanligt, tack.'
    },
    {
      id: '#58235',
      timeRemaining: '10:10',
      pizzas: [
        { id: 'p7', name: 'Capricciosa x 2' },
        { id: 'p8', name: 'Kebabpizza x 1' },
      ],
      isCompleted: true,
      comment: ''
    },
    {
      id: '#58236',
      timeRemaining: '5:00',
      pizzas: [
        { id: 'p9', name: 'Quattro Stagioni x 1' },
        { id: 'p10', name: 'Calzone x 1' },
      ],
      isCompleted: false,
      comment: 'Extra napkins please.'
    },
    {
      id: '#58237',
      timeRemaining: '45:30',
      pizzas: [
        { id: 'p11', name: 'Funghi x 3' },
      ],
      isCompleted: false,
      comment: 'Ring the doorbell loudly, please.'
    },
    {
      id: '#58238',
      timeRemaining: '25:15',
      pizzas: [
        { id: 'p12', name: 'Pepperoni x 2' },
        { id: 'p13', name: 'Marinara x 1' },
        { id: 'p14', name: 'Extra pepperoni' },
      ],
      isCompleted: false,
      comment: 'Leave at the doorstep if no answer.'
    }
  ];

  return (
    <div className={style.kitchenContainer}>
      <Header />
      <OrderList orders={orders} />
    </div>
  );
};

export default KitchenPage;
