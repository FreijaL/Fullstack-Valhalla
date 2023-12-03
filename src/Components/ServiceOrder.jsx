import React, { useState, useEffect } from 'react';
import styles from './ServiceOrder.module.scss';

const ServiceOrder = ({ order, onOrderClick }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const initialTime = order.timeRemaining;
  const [elapsedTime, setElapsedTime] = useState(initialTime);
  const [isOrderVisible, setIsOrderVisible] = useState(true);

  //Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //Ändra färg baserat på timer
  const getTimeColor = () => {
    if (!isCompleted) { // Check if the order is not completed
      if (elapsedTime >= 1800) { 
        return styles.timeRed;
      } else if (elapsedTime >= 900) { 
        return styles.timeYellow;
      }
    }
    return ''; // Return default style if the order is completed
  };

  //Servera > Klar > Ta Bort
  const markAsCompleted = () => {
    if (!isCompleted) {
      setIsCompleted(true);
    } else {
      setIsOrderVisible(false); 
    }
  };

  if (!isOrderVisible) return null; // När man klickar på KLAR så blir ordern osynlig, detta borde animeras för snygghet

  //Ändrar utseende på knapp vid klick
  const getButtonStyle = () => {
    return isCompleted ? styles.orderButton : styles.startButton;
  };


  // Ändrar texten inuti knappen
  const getButtonText = () => {
    return isCompleted ? "KLAR" : "Servera";
  };

  // Format the elapsed time as MM:SS
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
  return (
    <div className={styles.orderCardContainer}>
      <div className={`${styles.orderCard} ${isCompleted ? styles.orderCardCompleted : ''} ${getTimeColor()}`} onClick={() => onOrderClick(order)}>
        <div className={styles.orderCardHeader}>
          <span>{order.id}</span>
          <span>{formatTime()}</span>
        </div>
        <div className={styles.orderCardPhone}>
          <span>Telefon: {order.phoneNr}</span>
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

export default ServiceOrder;
