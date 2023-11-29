//KitchenPage.jsx

import style from './KitchenPage.module.scss';
import React from 'react';
import OrderList from '../../Components/OrderList';
import Header from '../../Components/Header';

function KitchenPage() {
  const startTime = 0;

  //For testing purposes
  const startTime1 = 29 * 60 + 55;
  const startTime2 = 14 * 60 + 54;
  const startTime3 = 10 * 60;
  const startTime4 = 5 * 60;
  const startTime5 = 4 * 60 + 45;
  const startTime6 = 52;


  // State management behövs
 //Fixar statisk lista sålänge
  const orders = [
    {
      id: '#58233',
      timeRemaining: startTime1,
      pizzas: [
        { id: 'p1', name: 'Vesuvio x 1'},
        { id: 'p2', name: 'Margherita x 1', comment: '+ Extra Ost' },
      ],
      isCompleted: false,
      comment: 'Lägg den extra osten bredvid tack!'
    },
    {
      id: '#58234',
      timeRemaining: startTime2,
      pizzas: [
        { id: 'p4', name: 'Vesuvio x 1', comment: '- Ingen skinka' },
        { id: 'p5', name: 'Hawaii x 2' },
      ],
      isCompleted: false,
      comment: 'Mindre lök än vanligt, tack.'
    },
    {
      id: '#58235',
      timeRemaining: startTime3,
      pizzas: [
        { id: 'p7', name: 'Capricciosa x 2' },
        { id: 'p8', name: 'Kebabpizza x 1' },
      ],
      isCompleted: true,
      comment: ''
    },
    {
      id: '#58236',
      timeRemaining: startTime4,
      pizzas: [
        { id: 'p9', name: 'Quattro Stagioni x 1' },
        { id: 'p10', name: 'Calzone x 1' },
      ],
      isCompleted: false,
      comment: 'Extra napkins please.'
    },
    {
      id: '#58237',
      timeRemaining: startTime5,
      pizzas: [
        { id: 'p11', name: 'Funghi x 3' },
      ],
      isCompleted: false,
      comment: 'Ring the doorbell loudly, please.'
    },
    {
      id: '#58238',
      timeRemaining: startTime6,
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
