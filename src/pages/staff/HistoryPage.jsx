//Historypage.jsx

import style from './HistoryPage.module.scss';
import React from 'react';
import OrderList from '../../Components/HistoryOrderList';
import Search from '../../Components/HistorySearch'
import Header from '../../Components/Header';

function HistoryPage() {
  const startTime = 0;

  //For testing purposes
  const startTime1 = 29 * 60 + 55;
  const startTime2 = 14 * 60 + 54;
  const startTime3 = 10 * 60;
  const startTime4 = 5 * 60;
  const startTime5 = 4 * 60 + 45;
  const startTime6 = 52;


  // BEHÖVER LÖSA STATE MANAGEMENT MED REDUX 

 //Fixar statisk lista sålänge
  const orders = [
    {
      id: '#58233',
      timeRemaining: startTime1,
      items: [
        { id: 'p1', name: 'Vesuvio', category: 'pizza', quantity: 1},
        { id: 'p2', name: 'Margherita', extras: ['Extra Ost'], category: 'pizza', quantity: 1},
      ],
      isCompleted: false,
      comment: 'Lägg den extra osten bredvid tack!'
    },
    {
      id: '#58234',
      timeRemaining: startTime2,
      items: [
        { id: 'p4', name: 'Vesuvio', removals: ['Ingen skinka'], category: 'pizza', quantity: 1 },
        { id: 'p5', name: 'Hawaii', category: 'pizza', quantity: 2 },
      ],
      isCompleted: false,
      comment: 'Mindre lök än vanligt, tack.'
    },
    {
      id: '#58235',
      timeRemaining: startTime3,
      items: [
        { id: 'p7', name: 'Capricciosa', category: 'pizza', quantity: 2 },
        { id: 'p8', name: 'Kebabpizza', category: 'pizza', quantity: 1 },
      ],
      isCompleted: true,
      comment: ''
    },
    {
      id: '#58236',
      timeRemaining: startTime4,
      items: [
        { id: 'p9', name: 'Quattro Stagioni', category: 'pizza', quantity: 1  },
        { id: 'p10', name: 'Calzone', category: 'pizza', quantity: 1  },
      ],
      isCompleted: false,
      comment: 'Extra napkins please.'
    },
    {
      id: '#58237',
      timeRemaining: startTime5,
      items: [
        { id: 'p11', name: 'Funghi', category: 'pizza', quantity: 3 },
      ],
      isCompleted: false,
      comment: 'Ring the doorbell loudly, please.'
    },
    {
      id: '#58238',
      timeRemaining: startTime6,
      items: [
        { id: 'p12', name: 'Pepperoni', category: 'pizza', quantity: 2 },
        { id: 'p13', name: 'Marinara', category: 'pizza', quantity: 1 },
        { id: 'p14', name: 'Vesuvio', category: 'pizza', quantity: 1 },
      ],
      isCompleted: false,
      comment: 'Leave at the doorstep if no answer.'
    }
  ];
  const totalNumberOfOrders = orders.length;



  return (
    <div className={style.historyPage}>
      <Header />
      <div className={style.historyContainer}>
      <Search />
      <OrderList orders={orders} />
      </div>
    </div>
  );
};

export default HistoryPage;
