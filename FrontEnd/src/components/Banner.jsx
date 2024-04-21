import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  
  const pathname = useLocation().pathname;

  return (
    <section className={pathname === "/" ? "banner" : "layout"}>
       <div className={pathname === "/" ? "banner__conteneur" : "layout__conteneur"}>
        {pathname === "/" ? (
          <h1>Chez vous, partout et ailleurs</h1>
        ) : null}
      </div>
    </section>
  );
};

export default Banner;
  
/*location n'est pas utilisée directement dans le reste du code du 
composant Banner, elle est essentielle 
pour accéder à l'URL actuelle. Cela permet au composant
 de prendre des décisions basées sur l'URL, même si dans 
 ce cas, seule la variable pathname est utilisée */






