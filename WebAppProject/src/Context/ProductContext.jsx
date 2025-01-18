// ProductProvider.js - Nowy kontekst dla produktów
import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      const productsWithRating = data.map(product => ({
        ...product,
        rating: Math.floor(Math.random() * 5) + 1, // Dodanie losowego ratingu
      }));

      localStorage.setItem('products', JSON.stringify(productsWithRating));
      setProducts(productsWithRating);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
