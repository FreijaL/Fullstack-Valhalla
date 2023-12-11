//HistoryOrder.jsx

import React from 'react';
import styles from './HistoryOrder.module.scss';

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

const HistoryOrder = ( { order }) => {
    return (
      <div className={styles.orderCardContainer}>
        <div className={styles.orderCard}>
          <div className={styles.orderCardHeader}>
            <span>{order.id}</span>
            <span>8/11/23 kl 14:32</span>
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
          <div className={styles.orderTotal}>
              <p>270:-</p>
          </div>
        </div>
      </div>
    )
}

export default HistoryOrder;