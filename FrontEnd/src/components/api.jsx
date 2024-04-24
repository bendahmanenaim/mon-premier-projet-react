// Importation de la bibliothèque Axios pour effectuer des requêtes HTTP
import axios from "axios";

// Définition de la fonction fetchProperties pour récupérer les propriétés depuis l'API
export const fetchProperties = async () => {
  try {
    // Effectuer une requête HTTP GET à l'URL spécifiée pour récupérer les propriétés
    const response = await axios.get("http://localhost:8080/api/properties");

     // Retourner les données de réponse (propriétés) provenant de l'API
    return response.data;
  } catch (error) {

    console.error("Error fetching properties:", error);
      // Relancer l'erreur pour que l'appelant puisse la gérer
    throw error;
  }
};