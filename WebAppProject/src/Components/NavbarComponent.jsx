import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavbarComponent() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const navigate = useNavigate();

  // Funkcja obsługująca wyszukiwanie
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
  };

  // Funkcja obsługująca wybór kategorii
  const handleCategoryClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ padding: 20 }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">WebAppStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Produkty</Nav.Link>
            <NavDropdown title="Kategorie" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleCategoryClick("men's clothing")}>
                Męskie ubrania
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategoryClick("women's clothing")}>
                Kobiece ubrania
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategoryClick('electronics')}>
                Elektronika
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategoryClick('jewelery')}>
                Biżuteria
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
            <NavDropdown title="Profil" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/myaccount">Moje Konto</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cart">Mój Koszyk</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/loginpage">Zaloguj się</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">Zarejestruj się</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {localStorage.setItem("user", "");
                window.location.reload();
              }}>wyloguj</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Wyszukaj"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

