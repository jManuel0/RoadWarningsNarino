import Navbar from "./components/ui/Navbar";
import AlertDetail from "./utils/AlertDetail";
import AlertForm from "./utils/AlertForm";
import Home from "./components/ui/Home";
import Login from "./components/ui/Login";
import NotFound from "./components/ui/NotFound";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/alerts/:id" element={<AlertDetail />} />
          <Route path="/alerts/new" element={<AlertForm />} />
          <Route path="/alerts/edit/:id" element={<AlertForm edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
