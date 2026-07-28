import api from "./api";

export const contactOwner = async (contactData) => {
  const response = await api.post("/contact", contactData);
  return response.data;
};
