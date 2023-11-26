// Order.js
import React, { useState } from 'react';
import styles from './Order.scss';

const Order = ({ order }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const markAsCompleted = () => {
    setIsCompleted(true);
    // Additional logic to update the server state
  };

  return (
    <div className={`${styles.orderCard} ${isCompleted ? styles.orderCardCompleted : ''}`}>
      <div className={styles.orderCardHeader}>
        <span>{order.id}</span>
        <span>{order.timeRemaining}</span>
      </div>
      <div className={styles.orderCardDetails}>
        {order.pizzas.map((pizza) => (
          <p key={pizza.id}>{pizza.name}</p>
        ))}
      </div>
      <button onClick={markAsCompleted}>Klar</button>
    </div>
  );
};

export default Order;
