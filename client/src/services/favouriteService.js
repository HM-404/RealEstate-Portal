import api from "./api";

// Add Favourite
export const addFavourite = async (propertyId) => {
  const response = await api.post("/favourites", {
    propertyId,
  });

  return response.data;
};

// Get All Favourites
export const getFavourites = async () => {
  const response = await api.get("/favourites");
  return response.data;
};

// Remove Favourite
export const removeFavourite = async (propertyId) => {
  const response = await api.delete(`/favourites/${propertyId}`);
  return response.data;
};
