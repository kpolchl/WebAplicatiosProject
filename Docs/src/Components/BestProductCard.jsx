import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BestProductCard({ image, title, category, price, rating }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '20rem', margin: '10px' }}>
      <div style={{width: '20rem', height: "20rem", padding: "15px"}}>
        <Card.Img variant="top" src={image} alt={title} style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'contain', 
            objectPosition: 'center', 
          }} />
      </div>
      <Card.Body>
        <div style={{height: "30px", marginBottom: "40px"}}>
            <Card.Title><strong>{title}</strong></Card.Title>
        </div>
        <div >
            <Card.Text><strong>Kategoria:</strong> {category}</Card.Text>
            <Card.Text><strong>Ocena:</strong> {rating} / 5</Card.Text>
            <Card.Text><strong>Cena:</strong> ${price}</Card.Text>
            <Button 
            variant="primary" 
            style={{ fontSize: 20 }} 
            onClick={() => navigate(`/product/${encodeURIComponent(title)}`)}>
            Zobacz produkt
            </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BestProductCard;