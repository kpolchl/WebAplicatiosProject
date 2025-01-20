import React from 'react';
import PropTypes from 'prop-types'; 

function ExampleCarouselImage({ text, imageUrl }) {
  return (
    <img
      className="d-block w-100"
      src={imageUrl}  
      alt={text}        
      style={{
        width: "100%",        
        height: "400px",     
        objectFit: "cover",  
      }}
    />
  );
}

// Opcjonalna walidacja propsów
ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;