import React, { useState, useEffect } from 'react';
import styles from './KitchenOrder.module.scss';

const Order = ({ order }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const initialTime = order.timeRemaining; // Initial time in seconds
  const [elapsedTime, setElapsedTime] = useState(initialTime);
  const [isOrderVisible, setIsOrderVisible] = useState(true);

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

  //Påbörja > Klar > Ta Bort
  const markAsCompleted = () => {
    if (!isCompleted) {
      setIsCompleted(true);
    } else {
      setIsOrderVisible(false); 
    }
  };

  //Byter ut utseendet på knappen
  const getButtonStyle = () => {
    return isCompleted ? styles.orderButton : styles.startButton;
  };


  // Ändrar texten inuti knappen
  const getButtonText = () => {
    return isCompleted ? "KLAR" : "Påbörja";
  };

  if (!isOrderVisible) return null; // När man klickar på KLAR så blir ordern osynlig, detta borde animeras för snygghet

  // Formatera tiden på ordrarna
  const formatTime = () => {
    const seconds = elapsedTime % 60;
    const minutes = Math.floor(elapsedTime / 60);

    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };


  // Tar emot addons eller removals, MÅSTE TA EMOT EN ARRAY OBS
  //Error ValidateDOMNesting pga <p> fattar ej varför 
  const formatItem = (item) => {
    return (
      <>
        <div className={styles.itemTitle}>
          {item.name} x {item.quantity}
        </div>
        {item.extras && (
          <div className={styles.itemComment}>
            + {item.extras.join(' + ')}
          </div>
        )}
        {item.removals && (
          <div className={styles.itemComment}>
            - {item.removals.join(' - ')}
          </div>
        )}
      </>
    );
  };

  //Beräknar totala mängden pizzor i ordern
  
  const calculateTotalitems = (items) => {
    return items
      .filter(item => item.category === 'item')
      .reduce((total, item) => total + item.quantity, 0);
  };

  const totalitems = calculateTotalitems(order.items);


  return (
    <div className={styles.orderCardContainer}>
      <div className={`${styles.orderCard} ${isCompleted ? styles.orderCardCompleted : ''} ${getTimeColor()}`}>
        <div className={styles.orderCardHeader}>
          <span>{order.id}</span>
          <span>{formatTime()}</span>
        </div>
        <div className={styles.orderCardDetails}>
          <div className={styles.orderItems}>
            {order.items.map((item) => (
              <div className={styles.itemContainer}  key={item.id}>
                {formatItem(item)}
                <p className={styles.itemComment}>{item.comment}</p>
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
