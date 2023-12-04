import React from 'react';
import styles from './ServiceOrderModal.module.scss';

const ServiceOrderModal = ({ order, onClose }) => {
  if (!order) {
    return null;
  }

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
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Orderinformation</h2>
          <button className={styles.modalCloseButton} onClick={onClose}>x</button>
        </div>
        <hr className={styles.lineDivider}/>
        <div className={styles.modalOrderHeader}>
          <h2 className={styles.modalOrderNr}>{order.id}</h2>
          <h2 className={styles.modalOrderDate}>{order.date}</h2>
        </div>
        <div className={styles.modalOrderItems}>
              {order.items.map((item) => (
                <div className={styles.itemContainer}  key={item.id}>
                  {formatItem(item)}
                  <p className={styles.itemComment}>{item.comment}</p>
                </div>
            ))}
            <p className={styles.commentTitle}>Kommentar från kund:</p>
            <p className={styles.commentBread}>{order.comment}</p>
            <h2 className={styles.modalOrderTotal}>Totalt: {order.total};-</h2> {/* implementera total beräkning */}
        </div>
        <hr />
        <h2 className={styles.modalFooterTitle}>Kundinformation</h2>
        <hr />
        <div className={styles.modalOrderFooter}>
          <p className={styles.modalCustomerName}>{order.name}</p>
          <p className={styles.modalCustomerNumber}>Telefon: {order.phoneNr}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceOrderModal;
