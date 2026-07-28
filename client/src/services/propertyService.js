import api from "./api";

// Get All Properties
export const getProperties = async () => {
  const response = await api.get("/properties");
  return response.data;
};

// Get Single Property
export const getProperty = async (id) => {
  const response = await api.get(`/properties/${id}`);
  return response.data;
};
