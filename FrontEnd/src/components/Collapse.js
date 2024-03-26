import React, { useState } from 'react';

export default function Collapsible({ title, description, equipments }) {
  const [isOpen, setIsOpen] = useState(false);


  // Récupération de l'url de la page 
  const pathname = window.location.pathname;

  let className = '';

  //Si l'URL correspond à la page `À propos` le style correspondant lui est attribué. 
  if (pathname === '/about-us') {
    className = 'collapsible__content--about';
  } else {
    className = 'collapsible__content--sheet';
  }

  return isOpen ? (
    <article className="collapsible">
      <div className="collapsible__header" onClick={() => setIsOpen(false)}>
        <h2>{title}</h2>
        <div className="icon">
          <i className={'fas fa-chevron-' + (isOpen ? 'down Collapse_iconUp__NunNW' : 'up Collapse_iconDown__-VweP')}></i>
        </div>
      </div>

      {typeof description === 'string' ? (
        // Si la description est un string, on affiche un paragraphe
        <React.Fragment>
          <p className={className}>{description}</p>
        </React.Fragment>
      ) : (
        // Si la description n'est pas un string, on affiche une liste
        <React.Fragment>
          <ul className={className}>
            {Array.isArray(equipments)&& equipments.map((equipment, index) => (
              // `map()` : parcour chaque élément du tableau et retourne une nouvelle liste d'éléments, qui s'afficheront dans une liste.
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </article>
  ) : (
    <article className="collapsible">
      <div className="collapsible__header" onClick={() => setIsOpen(true)}>
        <h2>{title}</h2>
        <div className="icon">
          <i className={'fas fa-chevron-' + (isOpen ? 'up Collapse_iconUp' : 'down Collapse_iconDown')}></i>
        </div>
      </div>
    </article>
  );
}