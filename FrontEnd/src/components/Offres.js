import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Offres = () => {
  
const [data,setData] = useState([]);
  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios.get("http://localhost:8080/api/properties")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="offres">
      <h1>Offres</h1>
      <ul>
        {data.map((id)=>
        (<li key={id.title}>{id.title.cover }
          </li>)
        )}
      </ul>
    </div>
    
  );
};

export default Offres;
