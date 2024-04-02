import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
//import Logo from "../components/Logo";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Thumb from "../components/Thumb";


const Home = () => {
  const [data, setData] = useState([]);

  
  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios.get("http://localhost:8080/api/properties")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <Navigation />
      <Banner/>
      <section className="Thumb">
    
    {/* Afficher les données récupérées ici */}
    {data.map((offre) => (
     <Thumb 
     key={offre.id}
     cover={offre.cover}
     title={offre.title}
     />
   ))}
 </section>
      <Footer/>
    </div>
  );
};

export default Home;