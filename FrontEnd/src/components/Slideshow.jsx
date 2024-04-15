import React, { useState } from 'react';
import ChevronRight from '../assets/img/ChevronRight.svg';
import ChevronLeft from '../assets/img/ChevronLeft.svg';

export default function Slideshow({ pictures, alt }) {
  const [index, setIndex] = useState(0);

  const nextPicture = () => {
    setIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const previousPicture = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const SlideCount = ({ indexPicture }) => {
    const width = window.innerWidth;

    if (width >= 1024) {
      return (
        <p className="slidecount--numbers">
          {indexPicture + 1}/{pictures.length}
        </p>
      );
    } else {
      return null;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      previousPicture();
    } else if (event.key === 'ArrowRight') {
      nextPicture();
    }
  };

  return (
    <article
      className="slideshow__content"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      {pictures.length > 1 && (
        <>
          <img
            src={ChevronLeft}
            alt="précédent"
            onClick={previousPicture}
            className="chevron--gauche"
          />
          <img
            src={ChevronRight}
            alt="suivant"
            onClick={nextPicture}
            className="chevron--droit"
          />
        </>
      )}

      <img
        className="slideshow__img"
        src={pictures[index]}
        alt={`Photo du logement : ${alt}`}
      />

      {pictures.length > 1 && <SlideCount indexPicture={index} />}
    </article>
  );
}