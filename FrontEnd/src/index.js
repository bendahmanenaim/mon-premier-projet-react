import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./styles/index.scss";

// Utilisez createRoot au lieu de ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendre l'application à l'aide de createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

