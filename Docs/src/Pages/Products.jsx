import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CardComponent from '../Components/CardComponent';
import { useProducts } from '../Context/ProductContext';

function Products() {
  const { products } = useProducts();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search');
    const category = queryParams.get('category');

    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    setFilteredProducts(filtered);
  }, [products, location.search]);

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {filteredProducts.map(product => (
        <CardComponent
          key={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          image={product.image}
          description={product.description}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default Products;