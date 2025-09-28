import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#222", padding: "10px" }}>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none", margin: 0 }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link></li>
        <li><Link to="/alerts" style={{ color: "white", textDecoration: "none" }}>Alertas</Link></li>
        <li><Link to="/create-alert" style={{ color: "white", textDecoration: "none" }}>Nueva Alerta</Link></li>
        <li><Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
