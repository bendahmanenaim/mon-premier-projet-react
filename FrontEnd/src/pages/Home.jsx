import React, { useEffect, useState } from "react";
import { fetchProperties } from "../components/api";
import Navigation from "../components/Navigation";
//import Logo from "../components/Logo";
import Banner from "../components/Banner";
import Thumb from "../components/Thumb";


const Home = () => {
  const [data, setData] = useState([]); // Initialisation de l'état local 'data' avec un tableau vide

  
   // Utilisation de useEffect pour effectuer une action lors du montage initial du composant
  useEffect(() => {
    const fetchData = async () => {
      try {
         // Appel de la fonction fetchProperties pour récupérer les données
        const propertiesData = await fetchProperties();

        // Mise à jour de l'état local 'data' avec les données récupérées
        setData(propertiesData);
      } catch (error) {
        // Gestion des erreurs en cas d'échec de la récupération des données
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();  // Appel de la fonction fetchData au montage initial du composant
  }, []); // Le tableau vide [] en tant que dépendance signifie que cela ne s'exécutera qu'une seule fois au montage initial
  return (
    <div className="container">
      <Navigation />
      <Banner/>

    {/* Section pour afficher les miniatures des offres */}
      <section className="Thumb">
    {/* Afficher les données récupérées ici */}
    {data.map((offre) => (
     <Thumb 
     key={offre.id} // Clé unique pour chaque miniature basée sur l'identifiant de l'offre
     cover={offre.cover} // Propriété 'cover' de l'offre pour l'image de couverture
     title={offre.title} // Propriété 'title' de l'offre pour le titre
     link={offre.id}// Propriété 'id' de l'offre pour le lien
     />
   ))}
 </section>
      
    </div>
  );
};

export default Home;