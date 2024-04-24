import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Fichelogement from "./pages/Fiche_logement";
import Error from './pages/Error';
/*import Footer from "./components/Footer";*/


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Fichelogement />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="/*" element={<Error />} />
      </Routes>
     
    </Router>
  );
};

export default App;
