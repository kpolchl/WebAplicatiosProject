import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';  // Import komponentu

function CarouselComponent() {
  return (
    <div style={{ backgroundColor: "rgba(63, 143, 189, 0.5)" }}>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <ExampleCarouselImage 
              text="First slide" 
              imageUrl="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"  // Link do przykładowego obrazu
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <ExampleCarouselImage 
              text="Second slide" 
              imageUrl="https://img.freepik.com/premium-photo/most-amazing-realistic-hd-8k-wallpaper-stock-photographic-image_915071-51074.jpg"  // Link do przykładowego obrazu
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <ExampleCarouselImage 
              text="Third slide" 
              imageUrl="https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg"  // Link do przykładowego obrazu
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselComponent;