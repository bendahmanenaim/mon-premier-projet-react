import React from "react";


const Banner = () => {
  const pathname = window.location.pathname;

  return pathname === "/about-us" ? (
    <section className="layout">
    <div className="layout__conteneur"></div>
   </section>
  ) : (
    
    <section className="banner">
      <div className="banner__conteneur">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </section>
   
  
  );
};

export default Banner;
