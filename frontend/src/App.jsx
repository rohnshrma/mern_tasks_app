import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateArea from "./Components/CreateArea";
import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
