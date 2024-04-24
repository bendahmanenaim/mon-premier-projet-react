import Staractive from '../assets/img/Staractive.svg';
import Starinactive from '../assets/img/Starinactive.svg';

export default function Rating({ rating }) {
   // Déclaration d'un tableau représentant les différents niveaux d'étoiles
  const starLevels = [1, 2, 3, 4, 5]; // Renommage du tableau en starLevels
 
  // Rendu du composant Rating avec JSX
  return (
    <div className="rating">
       {/* Utilisation de map() pour parcourir starLevels et afficher les étoiles */}
      {starLevels.map((level, index) =>
        rating >= level ? (
           // Si le rating est supérieur ou égal au niveau actuel, afficher une étoile active
          <img
            key={index} // Clé unique pour chaque élément img
            className="rating--stars" // Classe CSS pour styler les étoiles
            src={Staractive} // Source de l'image pour une étoile active
            alt="Staractive" // Texte alternatif de l'image
          />
        ) : (
           // Sinon, afficher une étoile inactive
          <img
            key={index} // Clé unique pour chaque élément img
            className="rating--stars" // Classe CSS pour styler les étoiles
            src={Starinactive} // Source de l'image pour une étoile inactive
            alt="Starinactive" // Texte alternatif de l'image
          />
        )
      )}
    </div>
  );
}