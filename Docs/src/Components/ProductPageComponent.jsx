import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCart } from '../Context/CartContext'; 

function ProductPageComponent({ image, title, category, price, description, rating }) {

  const { addToCart } = useCart(); // Pobierz funkcję dodawania do koszyka

  const handleAddToCart = () => {
    const product = { title, category, price, image, rating };
    addToCart(product); // Dodaj produkt do koszyka
    alert(`${title} dodano do koszyka!`);
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Row className="align-items-center">
        {/* Obraz po lewej stronie */}
        <Col md={6} className="text-center">
          <img 
            src={image} 
            alt={title} 
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              height: 'auto', 
              objectFit: 'cover', 
              borderRadius: '10px' 
            }} 
          />
        </Col>

        {/* Szczegóły produktu po prawej stronie */}
        <Col md={6}>
          <h1>{title}</h1>
          <h4>Kategoria: {category}</h4>
          <h3 style={{ color: 'green', fontSize: "25"}}>${price.toFixed(2)}</h3>
          <h3 style={{ color: 'rgb(184, 141, 0)', fontSize: "25"}}>Ocena: {rating} / 5</h3>
          <Button  variant="primary" 
          style={{ fontSize: '25px', marginTop: '20px', padding: '10px' }}
          onClick={handleAddToCart}>
            Dodaj do koszyka
          </Button>
        </Col>
      </Row>
      <div style={{margin: '100px 50px ', padding: "20px 50px", border: '2px solid rgba(32, 109, 205, 0.8)', borderRadius: "50px"}}>
      <h3><strong>Opis produktu:</strong></h3>
      <p style={{fontSize: "25px"}}>{description}</p>
      </div>
      <br></br>
    </Container>
  );
}

export default ProductPageComponent;
