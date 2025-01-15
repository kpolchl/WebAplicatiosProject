import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent';
import Home from './Pages/Home';
import Products from './Pages/Products';
import './App.css';
import Categories from './Pages/Categories';
import MyAccount from './Pages/MyAccount';
import Cart from './Pages/Cart';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
