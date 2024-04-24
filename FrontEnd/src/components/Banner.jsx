import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  // Utilisation du hook useLocation pour obtenir l'objet location
  const pathname = useLocation().pathname;

  return (
    // Section conditionnelle basée sur le chemin d'accès (pathname)
    <section className={pathname === "/" ? "banner" : "layout"}>
         {/* Condition pour déterminer le conteneur à afficher en fonction du chemin */}
       <div className={pathname === "/" ? "banner__conteneur" : "layout__conteneur"}>
          {/* Condition pour afficher le titre uniquement si le chemin est "/" */}
        {pathname === "/" ? (
          <h1>Chez vous, partout et ailleurs</h1>
        ) : null}
      </div>
    </section>
  );
};

export default Banner;
  







