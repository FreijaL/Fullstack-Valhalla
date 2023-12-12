import React, { useState, useEffect } from 'react';
import styles from './ServiceOrder.module.scss';

const ServiceOrder = ({ order, onOrderClick }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  let orderTime = new Date(order.orderDate);
  let currentTime = new Date();
  let timeDifference = currentTime - orderTime;
  const initialTime = Math.floor(timeDifference / 1000);
  const [elapsedTime, setElapsedTime] = useState(initialTime);
  const [isOrderVisible, setIsOrderVisible] = useState(true);

  const handleButtonClick = (event) => {
    event.stopPropagation(); // Prevent click event from bubbling up
    setIsCompleted(prevState => !prevState); // Toggle the completed state
    markAsCompleted();
  };

  //Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //Ändra färg baserat på timer
  const getTimeColor = () => {
      if (elapsedTime >= 1800) { 
        return styles.timeRed;
      } else if (elapsedTime >= 900) { 
        return styles.timeYellow;
      }
  };

  //Servera > Klar > Ta Bort
  const markAsCompleted = () => {
    if (!isCompleted) {
      setIsCompleted(true);
    } else {
      fetch(`https://1x78ct0zxk.execute-api.eu-north-1.amazonaws.com/api/order/${order.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "progress": "Done" }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.message == "Success!") {
          setIsOrderVisible(false); 
        } else {
            console.log("Failure");
        }
      })
      .catch(error => console.error('Error', error));
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
            {item.itemName} x {item.quantity}
          </div>
        </>
      );
    };
  return (
    <div className={styles.orderCardContainer}>
      <div className={`${styles.orderCard} ${isCompleted ? styles.orderCardCompleted : ''} ${getTimeColor()}`} onClick={() => onOrderClick(order)}>
        <div className={styles.orderCardHeader}>
          <span>#{order.orderNumber}</span>
          <span>{formatTime()}</span>
        </div>
        <div className={styles.orderCardPhone}>
          <span>Telefon: {order.customerInfo.customerPhone}</span>
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
          <p className={styles.commentBread}>{order.orderComment}</p>
        </div>
        <button className={getButtonStyle()} onClick={handleButtonClick}>{getButtonText()}</button>
      </div>
    </div>
  );
};

export default ServiceOrder;
