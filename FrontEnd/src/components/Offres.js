import React, { useEffect, useState } from "react";
import axios from "axios";

const Offres = () => {
  

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios.get("http://localhost:8080/api/properties")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="offres">
      <h1>Offres</h1>
    </div>
    
  );
};

export default Offres;
