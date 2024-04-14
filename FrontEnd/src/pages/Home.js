import React, { useEffect, useState } from "react";
import { fetchProperties } from "../components/api";
import Navigation from "../components/Navigation";
//import Logo from "../components/Logo";
import Banner from "../components/Banner";
import Thumb from "../components/Thumb";


const Home = () => {
  const [data, setData] = useState([]);

  
  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    const fetchData = async () => {
      try {
        const propertiesData = await fetchProperties();
        setData(propertiesData);
      } catch (error) {
        // Gérer les erreurs
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <Navigation />
      <Banner/>
      <section className="Thumb">
    
    {/* Afficher les données récupérées ici */}
    {data.map((offre) => (
     <Thumb 
     key={offre.id}
     cover={offre.cover}
     title={offre.title}
     link={offre.id}
     />
   ))}
 </section>
      
    </div>
  );
};

export default Home;