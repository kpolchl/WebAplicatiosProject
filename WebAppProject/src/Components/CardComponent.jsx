import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function CardComponent({title, price, description, image, category, rating }) {
  const navigate = useNavigate();

  return (
    <Card 
      style={{ width: '60%', margin: '10px' }} 
      className="d-flex flex-column flex-md-row align-items-center"
    >
      
      <div 
        style={{
          border: '2px solid rgba(32, 109, 205, 0.8)',
          borderRadius: 8,
          margin: 15,
          padding: 15,
          width: '225px',
          height: '225px',
          flexShrink: 0, // Zapobiega zmniejszaniu obrazu
        }}
      >
        <Card.Img 
          src={image} 
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'contain', 
            objectPosition: 'center', 
          }} 
        />
      </div>
    
      <div 
        className="text-center text-md-start"
        style={{ 
          fontSize: 20, 
          width: '100%', 
        }}
      >
        <Card.Body>
          <Card.Title><strong>{title}</strong></Card.Title>
          <Card.Text><strong>Kategoria:</strong> {category}</Card.Text>
          <Card.Text><strong>Ocena: </strong> {rating} / 5</Card.Text>
          <Card.Text><strong>Cena:</strong> ${price}</Card.Text>
          <Button 
            variant="primary" 
            style={{ fontSize: 20 }} 
            onClick={() => navigate(`/product/${encodeURIComponent(title)}`)}>
            Zobacz produkt
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default CardComponent;