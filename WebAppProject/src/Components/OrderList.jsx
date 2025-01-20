import React from 'react';
import OrderCard from './OrderCard'; // Assuming OrderCard is in the same directory

const orders = [
  {
    imageUrl: 'https://via.placeholder.com/150',
    orderDate: '2025-01-10T10:00:00Z',
    price: 99.99
  },
  {
    imageUrl: 'https://via.placeholder.com/150',
    orderDate: '2025-01-12T14:30:00Z',
    price: 49.50
  }
];

const OrderList = () => {
  return (
    <div className="d-flex flex-wrap">
      {orders.map((order, index) => (
        <div key={index} className="m-3">
          <OrderCard order={order} />
        </div>
      ))}
    </div>
  );
};

export default OrderList;