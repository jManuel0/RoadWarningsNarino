import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3000",
});

// Obtener todas las alertas
export const getAlerts = () => API.get("/alerts");

// Crear una alerta
export const createAlert = (data) => API.post("/alerts", data);

// Obtener una alerta por ID
export const getAlertById = (id) => API.get(`/alerts/${id}`);

// Editar una alerta
export const updateAlert = (id, data) => API.put(`/alerts/${id}`, data);

// Eliminar una alerta
export const deleteAlert = (id) => API.delete(`/alerts/${id}`);
