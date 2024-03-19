import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";


const About = () => {
  return (
    <div>
      <Logo/>
      <Navigation/>
      <Banner/>
      <Collapse/>
             <div>
           <h2>Respect</h2>
              <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
             </p>
      </div>
      <div>
           <h2>Service</h2>
               <p>
               Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
              </p>
      </div>
      <div>
           <h2>Sécurité</h2>
               <p>
               La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
              </p>
      </div>
        </div>
  );
};

export default About;
