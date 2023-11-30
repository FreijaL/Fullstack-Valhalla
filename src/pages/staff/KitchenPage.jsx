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


  // BEHÖVER LÖSA STATE MANAGEMENT MED REDUX 

 //Fixar statisk lista sålänge
  const orders = [
    {
      id: '#58233',
      timeRemaining: startTime1,
      pizzas: [
        { id: 'p1', name: 'Vesuvio', category: 'pizza', quantity: 1},
        { id: 'p2', name: 'Margherita', extras: ['Extra Ost'], category: 'pizza', quantity: 1},
      ],
      isCompleted: false,
      comment: 'Lägg den extra osten bredvid tack!'
    },
    {
      id: '#58234',
      timeRemaining: startTime2,
      pizzas: [
        { id: 'p4', name: 'Vesuvio', removals: ['Ingen skinka'], category: 'pizza', quantity: 1 },
        { id: 'p5', name: 'Hawaii', category: 'pizza', quantity: 2 },
      ],
      isCompleted: false,
      comment: 'Mindre lök än vanligt, tack.'
    },
    {
      id: '#58235',
      timeRemaining: startTime3,
      pizzas: [
        { id: 'p7', name: 'Capricciosa', category: 'pizza', quantity: 2 },
        { id: 'p8', name: 'Kebabpizza', category: 'pizza', quantity: 1 },
      ],
      isCompleted: true,
      comment: ''
    },
    {
      id: '#58236',
      timeRemaining: startTime4,
      pizzas: [
        { id: 'p9', name: 'Quattro Stagioni', category: 'pizza', quantity: 1  },
        { id: 'p10', name: 'Calzone', category: 'pizza', quantity: 1  },
      ],
      isCompleted: false,
      comment: 'Extra napkins please.'
    },
    {
      id: '#58237',
      timeRemaining: startTime5,
      pizzas: [
        { id: 'p11', name: 'Funghi', category: 'pizza', quantity: 3 },
      ],
      isCompleted: false,
      comment: 'Ring the doorbell loudly, please.'
    },
    {
      id: '#58238',
      timeRemaining: startTime6,
      pizzas: [
        { id: 'p12', name: 'Pepperoni', category: 'pizza', quantity: 2 },
        { id: 'p13', name: 'Marinara', category: 'pizza', quantity: 1 },
        { id: 'p14', name: 'Vesuvio', category: 'pizza', quantity: 1 },
      ],
      isCompleted: false,
      comment: 'Leave at the doorstep if no answer.'
    }
  ];

  const calculateTotalPizzas = (orders) => {
    return orders.reduce((total, order) => {
      const pizzasInOrder = order.pizzas || [];
      const totalPizzasInOrder = pizzasInOrder.reduce((orderTotal, pizza) => orderTotal + pizza.quantity, 0);
      return total + totalPizzasInOrder;
    }, 0);
  };

  const totalNumberOfPizzas = calculateTotalPizzas(orders);
  const totalNumberOfOrders = orders.length;



  return (
    <div className={style.kitchenContainer}>
      <Header />
      <h2 className={style.kitchenCounter}>Pågående ordrar: {totalNumberOfOrders} - Antal Pizzor: {totalNumberOfPizzas}</h2>
      <OrderList orders={orders} />
    </div>
  );
};

export default KitchenPage;
