import React, { useState } from 'react';

const Collapse = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Fonction pour basculer l'état du collapse
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="Collapse_collapseContainer__XVQT-">
      <div className="Collapse_title__ekDwp" onClick={toggleCollapse}>
        <h1>Fiabilité</h1>
        {/* Utilisation de l'icône fa-angle-down de Font Awesome */}
        <i
          className={`fa-light fa-angle-${isCollapsed ? 'down' : 'up'}`}
          role="button"
        />
      </div>
      {/* Condition pour afficher ou masquer le texte en fonction de l'état du collapse */}
      {!isCollapsed && (
        <div className="Collapse_text__2ULiJ">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </div>
      )}
    </div>
  );
};

export default Collapse;