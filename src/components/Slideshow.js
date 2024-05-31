import React, { useState } from 'react';
import '../styles/Slideshow.scss';
import flecheDroite from '../assets/FLECHE_DROITE.png';
import flecheGauche from '../assets/FLECHE_GAUCHE.png';

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slideshow-container">
      {pictures.length > 1 && (
        <>
          <button className="slideshow-button prev" onClick={handlePrevious}>
            <img src={flecheGauche} alt="Previous" />
          </button>
          <button className="slideshow-button next" onClick={handleNext}>
            <img src={flecheDroite} alt="Next" />
          </button>
        </>
      )}
      <div className="slideshow-slide">
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        {pictures.length > 1 && (
          <div className="slideshow-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default Slideshow;
