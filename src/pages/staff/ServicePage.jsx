import style from './ServicePage.module.scss';
import React, { useState } from 'react';
import ServiceOrderList from '../../Components/ServiceOrderList';
import ServiceOrderModal from '../../Components/ServiceOrderModal';
import Header from '../../Components/Header';

function ServicePage() {
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
      phoneNr: '070-123 45 67',
      timeRemaining: startTime1,
      items: [
        { id: 'p1', name: 'Vesuvio', category: 'pizza', quantity: 1},
        { id: 'p2', name: 'Margherita', extras: ['Extra Ost'], category: 'pizza', quantity: 1},
        { id: 'p3', name: 'Pepsi Max', category: 'Drink', quantity: 2}
      ],
      isCompleted: false,
      date: '8/11/23 kl 14:43',
      name: 'Knut Kundsson',
      total: 300,
      comment: 'Lägg den extra osten bredvid tack!'
    },
    {
      id: '#58234',
      phoneNr: '070-123 45 67',
      timeRemaining: startTime2,
      items: [
        { id: 'p4', name: 'Vesuvio', removals: ['Ingen skinka'], category: 'pizza', quantity: 1 },
        { id: 'p5', name: 'Hawaii', category: 'pizza', quantity: 2 },
      ],
      isCompleted: false,
      date: '8/11/23 kl 14:43',
      name: 'Knut Kundsson',
      total: 300,
      comment: 'Mindre lök än vanligt, tack.'
    },
    {
      id: '#58235',
      phoneNr: '070-123 45 67',
      timeRemaining: startTime3,
      items: [
        { id: 'p7', name: 'Capricciosa', category: 'pizza', quantity: 2 },
        { id: 'p8', name: 'Kebabpizza', category: 'pizza', quantity: 1 },
      ],
      isCompleted: true,
      date: '8/11/23 kl 14:43',
      name: 'Knut Kundsson',
      total: 300,
      comment: ''
    },
    {
      id: '#58236',
      phoneNr: '070-123 45 67',
      timeRemaining: startTime4,
      items: [
        { id: 'p9', name: 'Quattro Stagioni', category: 'pizza', quantity: 1  },
        { id: 'p10', name: 'Calzone', category: 'pizza', quantity: 1  },
      ],
      isCompleted: false,
      date: '8/11/23 kl 14:43',
      name: 'Knut Kundsson',
      total: 300,
      comment: 'Extra napkins please.'
    },
    {
      id: '#58237',
      phoneNr: '070-123 45 67',
      timeRemaining: startTime5,
      items: [
        { id: 'p11', name: 'Funghi', category: 'pizza', quantity: 3 },
      ],
      isCompleted: false,
      date: '8/11/23 kl 14:43',
      name: 'Knut Kundsson',
      total: 300,
      comment: 'Ring the doorbell loudly, please.'
    },
    {
      id: '#58238',
      phoneNr: '070-123 45 67',
      timeRemaining: startTime6,
      items: [
        { id: 'p12', name: 'Pepperoni', category: 'pizza', quantity: 2 },
        { id: 'p13', name: 'Marinara', category: 'pizza', quantity: 1 },
        { id: 'p14', name: 'Vesuvio', category: 'pizza', quantity: 1 },
      ],
      isCompleted: false,
      date: '8/11/23 kl 14:43',
      name: 'Knut Kundsson',
      total: 300,
      comment: 'Leave at the doorstep if no answer.'
    }
  ];

  const totalNumberOfOrders = orders.length;

  //Modal för extra orderinfo
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };
  
    return (
      <>
        <Header />
        <div className={style.serviceContainer}>
          <h2 className={style.serviceCounter}>Pågående ordrar: {totalNumberOfOrders}</h2>
          <ServiceOrderList orders={orders} onOrderClick={handleOrderClick}/>
          {selectedOrder && (
          <ServiceOrderModal order={selectedOrder} onClose={handleCloseModal} />
        )}
        </div>
      </>
    );
};

export default ServicePage;
