//HistoryOrder.jsx

import React from 'react';
import styles from './HistoryOrder.module.scss';
import moment from 'moment';

const formatItem = (item) => {
  return (
    <>
      <div className={styles.itemTitle}>
        {item.itemName} x {item.quantity}
      </div>
    </>
  );
};

const formatDate = (date) => {
  let orderDate = new Date(date);
  let momentDate = moment(orderDate);
  let formattedDate = momentDate.format("DD/MM/YY HH:mm");
  return (
    <>
    <span>{formattedDate}</span>
    </>
  )
}

const HistoryOrder = ({ order }) => {
    return (
      <div className={styles.orderCardContainer}>
        <div className={styles.orderCard}>
          <div className={styles.orderCardHeader}>
            <span>#{order.orderNumber}</span>
            <span>{formatDate(order.orderDate)}</span>
          </div>
          <div className={styles.orderCardDetails}>
            <div className={styles.orderItems}>
              {order.items.map((item) => (
                <div className={styles.itemContainer}  key={item.id}>
                  {formatItem(item)}
                </div>
            ))}
            </div>
            <p className={styles.commentTitle}>Kommentar från kund:</p>
            <p className={styles.commentBread}>{order.orderComment}</p>
          </div>
          <div className={styles.orderTotal}>
              <p>{order.priceTotal}:-</p>
          </div>
        </div>
      </div>
    )
}

export default HistoryOrder;