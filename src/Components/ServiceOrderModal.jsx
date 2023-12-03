import React from 'react';
import styles from './ServiceOrderModal.module.scss';

const ServiceOrderModal = ({ order, onClose }) => {
  if (!order) {
    return null;
  }

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <button onClick={onClose}>X</button>
        {/* Order details here */}
        <h3>Orderinformation</h3>
        {/* Format and display the order information */}
        <p>Totalt: 300kr</p> {/* Implement calculateTotalPrice */}
      </div>
    </div>
  );
};

export default ServiceOrderModal;
