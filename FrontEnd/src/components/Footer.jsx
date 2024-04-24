import React from "react";
import Logo from '../assets/img/logokasa.png';


const Footer= () => {
  return (
    <>
   {/* Début du balisage JSX pour le composant Footer */}
   <footer className='footer footer-no-padding'>
             {/* Utilisation de l'élément img pour afficher le logo avec l'attribut alt */}
            <img src={Logo} alt="Logo Kasa" />
             {/* Paragraphe affichant le message de droits d'auteur */}
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
   </>
  );
};

export default Footer;