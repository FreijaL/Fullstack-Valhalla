import React, { useState, useEffect } from 'react';
import styles from './Order.module.scss';

const Order = ({ order }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const initialTime = order.timeRemaining; // Initial time in seconds
  const [elapsedTime, setElapsedTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeColor = () => {
    if (elapsedTime >= 1800) { // 30 minutes in seconds
      return styles.timeRed;
    } else if (elapsedTime >= 900) { // 15 minutes in seconds
      return styles.timeYellow;
    }
    return '';
  };

  const markAsCompleted = () => {
    setIsCompleted(true);
    // Additional logic to update the server state
  };

  const getButtonStyle = () => {
    if (elapsedTime < 60) { // First minute
      return styles.startButton;
    }
    return styles.orderButton;
  };

  const getButtonText = () => {
    if (elapsedTime < 60) { // First minute
      return "Påbörja";
    }
    return "KLAR";
  };

  // Format the elapsed time as MM:SS
  const formatTime = () => {
    const seconds = elapsedTime % 60;
    const minutes = Math.floor(elapsedTime / 60);

    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className={styles.orderCardContainer}>
      <div className={`${styles.orderCard} ${isCompleted ? styles.orderCardCompleted : ''} ${getTimeColor()}`}>
        <div className={styles.orderCardHeader}>
          <span>{order.id}</span>
          <span>{formatTime()}</span>
        </div>
        <div className={styles.orderCardDetails}>
          <div className={styles.orderItems}>
            {order.pizzas.map((pizza) => (
              <div className={styles.itemContainer}  key={pizza.id}>
                <p className={styles.itemTitle}>{pizza.name}</p>
                <p className={styles.itemComment}>{pizza.comment}</p>
              </div>
          ))}
          </div>
          <p className={styles.commentTitle}>Kommentar från kund:</p>
          <p className={styles.commentBread}>{order.comment}</p>
        </div>
        <button className={getButtonStyle()} onClick={markAsCompleted}>{getButtonText()}</button>
      </div>
    </div>
  );
};

export default Order;
