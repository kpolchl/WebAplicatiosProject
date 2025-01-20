import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(''); // Error state

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers()
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email);

    if (!user) {
      setError('Nieprawidłowy e-mail lub hasło.');
      return;
    }
   
    if (user.password !== password) {
      setError('Nieprawidłowy e-mail lub hasło.');
      return;
    }

    
    localStorage.setItem('user', JSON.stringify(user));

    
    setEmail('');
    setPassword('');
    setError('');

    alert('Zalogowano pomyślnie!');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Logowanie</h2>

          {error && <Alert variant="danger">{error}</Alert>} 

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adres email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Wprowadź email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Hasło</Form.Label>
              <Form.Control
                type="password"
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Zaloguj
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
