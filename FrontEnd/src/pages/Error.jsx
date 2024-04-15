import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';


export default function Error() {
  const width = window.innerWidth;// Récupération de la largeur de la fenêtre du navigateur

  useEffect(() => {
    // Utilisation de useEffect pour mettre à jour le titre de la page une seule fois au chargement initial
    document.title = `Nous ne trouvons pas la page recherchée`; // Définition du titre de la page
  }, []);// Le tableau vide [] en tant que dépendance signifie que cela ne s'exécutera qu'une seule fois au montage initial

  return (
    <React.Fragment>
       {/* Affichage de la navigation */}
      <div className='container'> 
      <Navigation />
        {/* Contenu principal de la page d'erreur */}
      <main className="error">
        <h2>404</h2>
        <p>
           {/* Affichage conditionnel d'un saut de ligne pour les petites largeurs d'écran */}
          Oups! La page que {width < 575 && <br></br>} vous demandez n'existe
          pas.
        </p>
          {/* Lien pour retourner à la page d'accueil */}
        <Link className="error__link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </main>
     </div>
    </React.Fragment>
  );
}