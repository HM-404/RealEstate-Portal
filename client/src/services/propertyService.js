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

// Add Property
export const addProperty = async (propertyData) => {
  const response = await api.post("/properties", propertyData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Update Property
export const updateProperty = async (id, propertyData) => {
  const response = await api.put(`/properties/${id}`, propertyData);
  return response.data;
};

// Delete Property
export const deleteProperty = async (id) => {
  const response = await api.delete(`/properties/${id}`);
  return response.data;
};
