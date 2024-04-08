import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Error() {
  const width = window.innerWidth;

  useEffect(() => {
    document.title = `Nous ne trouvons pas la page recherchée`;
  }, []);

  return (
    <React.Fragment>
    
      <Navigation />
      <main className="error">
        <h2>404</h2>
        <p>
          Oups! La page que {width < 575 && <br></br>} vous demandez n'existe
          pas.
        </p>
        <Link className="error__link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </main>
      <Footer/>
    </React.Fragment>
  );
}