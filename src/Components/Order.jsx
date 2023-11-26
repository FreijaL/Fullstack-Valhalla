import React, { useState } from 'react';

const Order = ({ order }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  // Function to handle marking an order as completed
  const markAsCompleted = () => {
    setIsCompleted(true);
    // Additional logic to update the server state
  };

  return (
    <div className={`order ${isCompleted ? 'completed' : ''}`}>
      <div className="order-header">
        <span>{order.id}</span>
        <span>{order.timeRemaining}</span>
      </div>
      <div className="order-details">
        {order.pizzas.map((pizza) => (
          <p key={pizza.id}>{pizza.name}</p>
        ))}
      </div>
      <button onClick={markAsCompleted}>KLAR</button>
    </div>
  );
};

export default Order;