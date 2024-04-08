import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { fetchProperties } from "../components/api";
import Collapse from '../components/Collapse';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Fiche_logement = () => {
  const { id } = useParams();
  const [foundOffre, setOffre] = useState(null);

  useEffect(() => {
    const fetchoffre = async () => {
      try {
        const properties = await fetchProperties(); // Récupération des données à partir de l'API
        console.log('Properties data:', properties);
        
        const foundOffre = properties.find((l) => l.id === id); // Filtrer l'offre spécifique par ID
        console.log('Found offre:', foundOffre);

        if (foundOffre) {
          setOffre(foundOffre); // Mettre à jour l'état avec l'offre sélectionnée
          document.title = `${foundOffre.title} - Kasa`;
        } else {
          console.log(`Aucune offre trouvée pour l'ID: ${id}`);
        }
      } catch (error) {
        console.error('Error fetching offre:', error);
        // Gérer les erreurs de chargement des données ici
      }
    };

    fetchoffre(); // Appel de la fonction fetchoffre lorsque le composant est monté
  }, [id]); // Déclenche fetchoffre lorsque l'ID change dans les paramètres de l'URL

   return foundOffre ? (
    // Si l'offre est trouvée, afficher la fiche
    <React.Fragment>
      <Navigation />
      <main>
        <section className="collapse__content--lodging">
          <Collapse
            title="Description"
            key={foundOffre.description}
            description={foundOffre.description}
          />
          <Collapse
            title="Équipements"
            key={foundOffre.equipments}
            equipments={foundOffre.equipments}
          />
        </section>
        <Footer/>
      </main>
    </React.Fragment>
  ) : (
    // JSX pour la redirection vers la page d'erreur
    <Navigate replace to="/erreur" />
  );
};

export default Fiche_logement;