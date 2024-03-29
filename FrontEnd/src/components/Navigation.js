import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import { useEffect, useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveAbout, setIsActiveAbout] = useState(false);
  useEffect(() => {
    const pathname = location.pathname;
    setIsActiveHome(pathname === "/");
    setIsActiveAbout(pathname === "/about");
  }, [location]);
  return (
    <div className="navigation">
       <Logo/>
      <nav className="navigation__nav">
      <ul className="navigation__nav--list">
      <NavLink to="/" className={isActiveHome ? "navigation__nav--home--underline" : "navigation__nav--home"}>
          <li>Accueil</li>
        </NavLink>
                <NavLink to="/about" className={isActiveAbout ? "navigation__nav--about--underline" : "navigation__nav--about"}>
          <li>À propos</li>
        </NavLink>
      </ul>
    
      </nav>
    </div>
  );
};

export default Navigation;