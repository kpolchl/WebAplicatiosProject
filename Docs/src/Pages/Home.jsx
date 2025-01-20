import React from 'react';
import CarouselComponent from '../Components/CarouselComponent';
import BestProductCard from '../Components/BestProductCard';
import { useProducts } from '../Context/ProductContext';
import '../StyleSheets/Home.css'

function Home() {
  const { products } = useProducts();
  const bestProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <>
      <CarouselComponent />
      <div style={{ margin: '50px' }}>
        <h2>Najlepsze produkty</h2>
        <div className="horizontal-scroll">
          {bestProducts.map(product => (
            <div key={product.id} style={{ flex: '0 0 auto' }}>
            <BestProductCard
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              rating={product.rating}
            />
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
