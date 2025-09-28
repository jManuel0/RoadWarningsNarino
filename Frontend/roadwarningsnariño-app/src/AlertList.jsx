import React from "react";
import { Link } from "react-router-dom";

const AlertList = ({ alerts }) => {
  if (!alerts || alerts.length === 0) {
    return <p>No hay alertas registradas</p>;
  }

  return (
    <ul>
      {alerts.map((alert) => (
        <li key={alert.id}>
          <Link to={`/alerts/${alert.id}`}>
            {alert.type} - {alert.location}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AlertList;
