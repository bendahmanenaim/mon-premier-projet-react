import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from '../assets/img/logokasa.png';
import { useEffect, useState } from 'react';

// Définition du composant Navigation comme une fonction fléchée (arrow function)
const Navigation = () => {
  // Utilisation de useLocation pour obtenir l'objet location du routeur
  const location = useLocation();

  // Utilisation de useState pour gérer l'état de l'élément actif "Accueil" et "À propos"
  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveAbout, setIsActiveAbout] = useState(false);

  // Utilisation de useEffect pour mettre à jour l'état en fonction de l'URL actuelle
  useEffect(() => {
    const pathname = location.pathname;
    // Vérifier si l'URL correspond à "/"
    setIsActiveHome(pathname === "/");
    // Vérifier si l'URL correspond à "/about"
    setIsActiveAbout(pathname === "/about");
  }, [location]);// Déclenchement de useEffect lorsque l'emplacement (location) change

   // Rendu du composant Navigation avec JSX
  return (
    <div className="navigation">
       {/* Utilisation de NavLink pour créer des liens de navigation réactifs */}
       <NavLink to="/">
          {/* Utilisation de l'élément img pour afficher le logo avec l'attribut alt */}
        <img className="navigation__img" src={Logo} alt="Logo Kasa" />
      </NavLink>
      <nav className="navigation__nav">
      <ul className="navigation__nav--list">
        {/* NavLink pour le lien "Accueil" avec gestion dynamique de la classe CSS */}
      <NavLink to="/" className={isActiveHome ? "navigation__nav--home--underline" : "navigation__nav--home"}>
          <li>Accueil</li>
        </NavLink>
         {/* NavLink pour le lien "À propos" avec gestion dynamique de la classe CSS */}
                <NavLink to="/about" className={isActiveAbout ? "navigation__nav--about--underline" : "navigation__nav--about"}>
          <li>À propos</li>
        </NavLink>
      </ul>
    
      </nav>
    </div>
  );
};
// Exportation par défaut du composant Navigation pour pouvoir l'utiliser ailleurs
export default Navigation;