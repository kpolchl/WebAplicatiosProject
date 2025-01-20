import React from 'react';
import { Card, Button } from 'react-bootstrap';

const OrderCard = ({ order }) => {
  // Extract order details from the props
  const { imageUrl, orderDate, price } = order;

  const handleImageClick = () => {
    // Handle the image click action (e.g., show order details)
    alert("Order image clicked!");
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={imageUrl}
        alt="Order image"
        style={{ cursor: 'pointer' }}
        onClick={handleImageClick} // Clickable image
      />
      <Card.Body>
        <Card.Title>Order Details</Card.Title>
        <Card.Text>
          <strong>Date Placed:</strong> {new Date(orderDate).toLocaleDateString()}<br />
          <strong>Price:</strong> ${price.toFixed(2)} {/* Format price to 2 decimal places */}
        </Card.Text>
        <Button variant="primary" onClick={handleImageClick}>
          View Order
        </Button>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
