import React, { useState, useEffect } from 'react';
import styles from './Order.module.scss';

const Order = ({ order }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const initialTime = order.timeRemaining; // Initial time in seconds
  const [elapsedTime, setElapsedTime] = useState(initialTime);

  useEffect(() => {
    //Timer
    const interval = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //Byter ut bakgrundsfärgen
  const getTimeColor = () => {
    if (elapsedTime >= 1800) { 
      return styles.timeRed;
    } else if (elapsedTime >= 900) { 
      return styles.timeYellow;
    }
    return '';
  };

  const markAsCompleted = () => {
    setIsCompleted(true);
    // Additional logic to update the server state
  };

  //Byter ut utseendet på knappen
  const getButtonStyle = () => {
    if (elapsedTime < 60) { 
      return styles.startButton;
    }
    return styles.orderButton;
  };

  //Timern för påbörja-knappen
  const getButtonText = () => {
    if (elapsedTime < 60) { 
      return "Påbörja";
    }
    return "KLAR";
  };

  // Formatera tiden på ordrarna
  const formatTime = () => {
    const seconds = elapsedTime % 60;
    const minutes = Math.floor(elapsedTime / 60);

    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };


  // Tar emot addons eller removals, MÅSTE TA EMOT EN ARRAY OBS
  const formatItem = (item) => {
    return (
      <>
        <p className={styles.itemTitle}>
          {item.name} x {item.quantity}
        </p>
        {item.extras && (
          <p className={styles.itemComment}>
            + {item.extras.join(' + ')}
          </p>
        )}
        {item.removals && (
          <p className={styles.itemComment}>
            - {item.removals.join(' - ')}
          </p>
        )}
      </>
    );
  };

  //Beräknar totala mängden pizzor i ordern
  
  const calculateTotalPizzas = (items) => {
    return items
      .filter(item => item.category === 'pizza')
      .reduce((total, item) => total + item.quantity, 0);
  };

  const totalPizzas = calculateTotalPizzas(order.pizzas);


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
                <p className={styles.itemTitle}>{formatItem(pizza)}</p>
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
