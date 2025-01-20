import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent';
import Home from './Pages/Home';
import Products from './Pages/Products';
import './App.css';
import Contact from './Pages/Contact'
import MyAccount from './Pages/MyAccount';
import Cart from './Pages/Cart';
import LoginPage from './Pages/LoginPage';
import ProductPage from './Pages/ProductPage';
import { CartProvider } from './Context/CartContext';
import { ProductProvider } from './Context/ProductContext';
import NewsletterComponent from './Components/Newsletter';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/product/:title" element={<ProductPage />} />
          </Routes>
          <NewsletterComponent/>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;