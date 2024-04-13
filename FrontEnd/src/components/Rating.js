import Staractive from '../assets/img/Staractive.svg';
import Starinactive from '../assets/img/Starinactive.svg';

export default function Rating({ rating }) {
  const starLevels = [1, 2, 3, 4, 5]; // Renommage du tableau en starLevels

  return (
    <div className="rating">
      {starLevels.map((level, index) =>
        rating >= level ? (
          <img
            key={index}
            className="rating--stars"
            src={Staractive}
            alt="Staractive"
          />
        ) : (
          <img
            key={index}
            className="rating--stars"
            src={Starinactive}
            alt="Starinactive"
          />
        )
      )}
    </div>
  );
}