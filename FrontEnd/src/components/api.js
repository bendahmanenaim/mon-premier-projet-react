import axios from "axios";

export const fetchProperties = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/properties");
    return response.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};