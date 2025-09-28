import React, { useState } from "react";

const AlertForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    description: "",
    severity: "",
    status: "activo",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input type="text" name="type" placeholder="Tipo de alerta" value={formData.type} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Ubicación" value={formData.location} onChange={handleChange} required />
      <textarea name="description" placeholder="Descripción" value={formData.description} onChange={handleChange} />
      <select name="severity" value={formData.severity} onChange={handleChange} required>
        <option value="">Seleccionar severidad</option>
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
      <button type="submit">Guardar Alerta</button>
    </form>
  );
};

export default AlertForm;
