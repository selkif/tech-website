import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002",
});

export const getOrder = async () => {
  const response = await api.get("/Order");
  return response.data;
};

export const createOrder = async (data) => {
  const response = await api.post("/Order", data);
  return response.data;
};

export const updateOrder = async (data) => {
  const response = await api.put(`/Order/${data.id}`, data);
  return response.data;
};

export const deleteOrder = async (id) => {
  await api.delete(`/Order/${id}`);
};
