import React, { useState } from 'react';
import ChevronRight from '../assets/img/ChevronRight.svg';
import ChevronLeft from '../assets/img/ChevronLeft.svg';

export default function Slideshow({ pictures, alt }) {
  // Déclaration de l'état index pour suivre l'index de l'image affichée dans le diaporama
  const [index, setIndex] = useState(0);
  // Fonction pour passer à l'image suivante
  const nextPicture = () => {
    setIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };
  
   // Fonction pour passer à l'image précédente
  const previousPicture = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  // Composant fonctionnel SlideCount pour afficher le numéro de l'image actuelle (condition basée sur la largeur de l'écran)
  const SlideCount = ({ indexPicture }) => {
    const width = window.innerWidth;
    
    // Affichage du numéro de l'image actuelle si la largeur de l'écran est supérieure ou égale à 1024px
    if (width >= 1024) {
      return (
        <p className="slidecount--numbers">
          {indexPicture + 1}/{pictures.length}
        </p>
      );
    } else {
      return null;  // Retourne null si la largeur de l'écran est inférieure à 1024px
    }
  };
 
   // Fonction pour gérer les événements clavier (flèches gauche/droite)
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {// Appelle previousPicture() si la touche ArrowLeft est pressée
      previousPicture();
    } else if (event.key === 'ArrowRight') {// Appelle previousPicture() si la touche ArrowLeft est pressée
      nextPicture();
    }
  };

  return (
    <article
      className="slideshow__content"
      tabIndex="0" // Rend l'élément focusable pour gérer les événements clavier
      onKeyDown={handleKeyDown} // Écoute les événements clavier
    >
      {/* Affiche les flèches de navigation uniquement si le diaporama contient plus d'une image */}
      {pictures.length > 1 && (
        <>
          <img
            src={ChevronLeft} // Image de la flèche gauche
            alt="précédent" // Texte alternatif de la flèche gauche
            onClick={previousPicture} // Appelle previousPicture() au clic sur la flèche gauche
            className="chevron--gauche" 
          />
          <img
            src={ChevronRight} // Image de la flèche droite
            alt="suivant" // Texte alternatif de la flèche droite
            onClick={nextPicture} // Appelle nextPicture() au clic sur la flèche droite
            className="chevron--droit" 
          />
        </>
      )}
       {/* Affiche l'image principale du diaporama en utilisant l'URL de l'image correspondant à l'index actuel */}
      <img
        className="slideshow__img" 
        src={pictures[index]}
        alt={alt}
      />
     {/* Affiche le numéro de l'image actuelle si le diaporama contient plus d'une image */}
      {pictures.length > 1 && <SlideCount indexPicture={index} />}
    </article>
  );
}