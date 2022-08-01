import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import './App.css'


const App = () => {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
    </div>
  );
};

export default App;
