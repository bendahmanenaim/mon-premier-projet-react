import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>À propos</li>
        </NavLink>
      </ul>
      <Logo/>
    </div>
  );
};

export default Navigation;