import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../assets/logo.png";
import DashboardHome from "./DashboardHome";

const Dashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="SwachhMitra Logo" width="60" height="60" className="me-2" />
            SwachhMitra
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link> {/* Use Link instead of <a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/impact">Impact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color:"red"}} to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="mt-1">
        <DashboardHome />
      </div>
    </div>
  );
};

export default Dashboard;



