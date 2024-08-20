import React, { useState, useEffect } from 'react';
import "./ImageSlider.css"

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000); 
    return () => clearInterval(intervalId);
  }, [images.length]); 

  return (
    <div className="slider">
      <button className='btn' onClick={prevSlide}>Prev</button>
      <div className="slider-images">
        <img src={images[currentIndex]} alt="Slide" />
      </div>
      <button className='btn' onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageSlider;

