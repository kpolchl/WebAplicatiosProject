import React, { createContext, useState, useContext, useEffect } from 'react';

// Tworzenie kontekstu
const CartContext = createContext();

export const useCart = () => useContext(CartContext); // Hook do łatwego używania koszyka

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Wczytaj koszyk z localStorage podczas inicjalizacji
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Funkcja do dodawania produktu do koszyka
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Zapisz koszyk w localStorage
      return updatedCart;
    });
  };

  // Zapisuj koszyk w localStorage za każdym razem, gdy się zmieni
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
