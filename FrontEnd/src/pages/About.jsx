import React, { useEffect } from 'react';
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import AboutUs from '../data/about-us.json';
import Footer from '../components/Footer';



export default function About() {
  // Utilisation de useEffect pour mettre à jour le titre de la page
  useEffect(() => {
    document.title = `À propos - Kasa`; // Définition du titre de la page
  });

  return (
    
    <React.Fragment>
      <div className='mainContainer'>
      <div className='container'>
          {/* Affichage de la navigation */}
     <Navigation/>
   
      <main>
           {/* Affichage de la bannière */}
        <Banner />
         {/* Section des collapsibles */}
        <section className="collapse">
           {/* Mapping à travers les données sur about pour afficher chaque Collapse */}
          {AboutUs.map((about, index) => (
            <Collapse
              key={about.title + index} // Clé unique pour chaque Collapse
              title={about.title}     // Titre du Collapse
              description={about.description} // Description du Collapse
            />
          ))}
        </section>
      </main>
     </div>
     <Footer/>
     </div>
    </React.Fragment>
    
  );
}
