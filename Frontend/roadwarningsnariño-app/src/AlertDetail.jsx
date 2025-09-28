import React from "react";

const AlertDetail = ({ alert }) => {
  if (!alert) return <p>No se encontró la alerta</p>;

  return (
    <div>
      <h2>{alert.type}</h2>
      <p><b>Ubicación:</b> {alert.location}</p>
      <p><b>Descripción:</b> {alert.description}</p>
      <p><b>Severidad:</b> {alert.severity}</p>
      <p><b>Estado:</b> {alert.status}</p>
    </div>
  );
};

export default AlertDetail;
