import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users/register', {
        first_name: name,
        last_name: surname,
        email: email,
        password: password,
      });
      alert("Rejestracja zakończona sukcesem!");
      navigate('/');
    } catch (err) {
      setError('Wystąpił błąd podczas rejestracji. Spróbuj ponownie.');
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#add8e6",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "80vh", 
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
          margin: "0px 30px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Zarejestruj się</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Imię:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Wpisz swoje imię"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                height: "50px",
                fontSize: "16px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nazwisko:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Wpisz swoje nazwisko"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
              style={{
                height: "50px",
                fontSize: "16px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Adres email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Wpisz swój email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                height: "50px",
                fontSize: "16px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hasło:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Wpisz swoje hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                height: "50px",
                fontSize: "16px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </Form.Group>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                width: "100%",
                maxWidth: "200px",
              }}
            >
              Zarejestruj się

            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;