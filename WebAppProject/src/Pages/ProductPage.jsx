import React from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../Context/ProductContext';
import ProductPageComponent from '../Components/ProductPageComponent';

function ProductPage() {
  const { title } = useParams();
  const { products } = useProducts();

  const product = products.find(product => product.title === decodeURIComponent(title));

  if (!product) {
    return <div>Produkt nie został znaleziony.</div>;
  }

  return (
    <ProductPageComponent
      image={product.image}
      title={product.title}
      category={product.category}
      price={product.price}
      description={product.description}
      rating={product.rating}
    />
  );
}

export default ProductPage;