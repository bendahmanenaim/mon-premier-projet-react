import React, { useEffect, useState } from "react";
import axios from "axios";


const Offres = () => {
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
    <div className="offres">
    
       {/* Afficher les données récupérées ici */}
       {data.map((offre) => (
        <div key={offre.id}>
          <p>{offre.title}</p>
          <img src={offre.cover} alt="Cover" />
        </div>
      ))}
    </div>
    
  );
};

export default Offres;
