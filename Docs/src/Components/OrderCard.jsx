import React from 'react';
import { Card } from 'react-bootstrap';

const OrderCard = ({ image, createdAt, value }) => {
  return (
    <Card style={{ width: '18rem', textAlign: 'left', margin: '1rem' }}>
      <Card.Img
        variant="top"
        src={image}
        alt="Order image"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>Order Details</Card.Title>
        <Card.Text>
          <strong>Date Placed:</strong> {new Date(createdAt).toLocaleDateString()}<br />
          <strong>Price:</strong> ${value.toFixed(2)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
