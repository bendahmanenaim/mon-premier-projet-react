import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { fetchProperties } from "../components/api";
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';
import Rating from '../components/Rating';
import Navigation from "../components/Navigation";


const Fiche_logement = () => {
  const { id } = useParams();
  const [foundOffre, setOffre] = useState(null);
  const [loading, setLoading] = useState(true); // Ajouter un état de chargement

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
      }   finally {
        setLoading(false); // Mettre à jour l'état de chargement une fois terminé
      }
    };

    fetchoffre(); // Appel de la fonction fetchoffre lorsque le composant est monté
  }, [id]); // Déclenche fetchoffre lorsque l'ID change dans les paramètres de l'URL
// Vérifier si on est en train de charger les données
if (loading) {
    return <p>Chargement en cours...</p>; // Peut être remplacé par un composant de chargement
  }

  // Si une offre est trouvée, afficher les détails
  return (
    <React.Fragment>
      <div className="container">
      <Navigation />
      <main>
      <section className="slideshow">
          <Slideshow pictures={foundOffre.pictures} alt={foundOffre.title} />
        </section>
        <section className="sheet">
          <div className="sheet--left">
            <h1 className="sheet__title">{foundOffre.title}</h1>
            <h2 className="sheet__location">{foundOffre.location}</h2>
            <ul className="sheet__tags">
              {foundOffre.tags.map((tag, index) => (
                <li className="sheet__tags--tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="sheet--right">
            <div className="personnas">
              <p>{foundOffre.host.name}</p>
              <img
                src={foundOffre.host.picture}
                alt={`Photo de profil de : ` + foundOffre.host.name}
              />
            </div>
            <Rating rating={foundOffre.rating} />
          </div>
        </section>
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
       
      </main>
      </div>
    </React.Fragment>
  );
};

export default Fiche_logement;