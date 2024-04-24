import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./styles/index.scss";

// Sélection de l'élément HTML avec l'identifiant "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application à l'aide de createRoot
root.render(
   // Utilisation de React.StrictMode pour appliquer des vérifications supplémentaires en mode strict
  <React.StrictMode>
      {/* Le composant principal de l'application, généralement appelé <App /> */}
    <App />
  </React.StrictMode>
);

