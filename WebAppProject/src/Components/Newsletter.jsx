import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewsletterComponent() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert("Zapisano do newslettera!");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40vh",
      backgroundColor: "rgba(31, 45, 54, 0.3)",
    }}>
      <div style={{
        width: "400px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333" }}>
              Zapisz się do newslettera!
            </Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Wprowadź swój adres Email" 
              style={{ borderRadius: "5px", marginTop: "10px" }}
            />
            <Form.Text className="text-muted" style={{ fontSize: "0.9rem", marginTop: "5px" }}>
              Nigdy nie udostępnimy Twojego adresu email nikomu innemu.
            </Form.Text>
          </Form.Group>
          <Button 
            variant="primary" 
            type="submit" 
            style={{ width: "100%", borderRadius: "5px", marginTop: "15px" }}
          >
            Zapisz się
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default NewsletterComponent;
