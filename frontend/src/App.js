import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import About from "./component/About";
import Contact from "./component/Contact";
import ExploreEvent from "./component/ExploreEvent"; // Import ExploreEvent
import Impact from "./component/Impact";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar on all pages except Dashboard */}
      {location.pathname !== "/dashboard" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore-event" element={<ExploreEvent />} /> {/* Add new route */}
        <Route path="/impact" element={<Impact />} /> {/* Add Impact Route */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
