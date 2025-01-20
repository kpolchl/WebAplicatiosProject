import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';  // Import komponentu

function CarouselComponent() {
  return (
    <div style={{ backgroundColor: "rgba(63, 143, 189, 0.5)", 
      justifyContent: "center",  
      alignItems: "center", }}>
      <div className="carousel-container" >
        <Carousel>
          <Carousel.Item>
            <ExampleCarouselImage 
              text="First slide" 
              imageUrl="https://images.pexels.com/photos/5699008/pexels-photo-5699008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Link do przykładowego obrazu
            />
            <Carousel.Caption>
              <h3 style={{border: "15 solid"}}><strong>Moda</strong></h3>
              <p>Zapoznaj sie z najnowszymi ubraniami z kolekcji</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <ExampleCarouselImage 
              text="Second slide" 
              imageUrl="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Link do przykładowego obrazu
            />
            <Carousel.Caption>
              <h3>Biżuteria</h3>
              <p>Wyróżnij się z nową biżuterią</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <ExampleCarouselImage 
              text="Third slide" 
              imageUrl="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  // Link do przykładowego obrazu
            />
            <Carousel.Caption>
              <h3>Elektornika</h3>
              <p>
                Najnowszy sprzęt elektroniczny
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      
    </div>
  );
}

export default CarouselComponent;