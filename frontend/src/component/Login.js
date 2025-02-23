import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/Home.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", formData);
      if (response.status === 200) {
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 2000,
        });

        // Save user info in localStorage/sessionStorage if needed
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 2000); // Redirect after toast
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="home-container">
      <ToastContainer /> {/* Toast container to display messages */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay d-flex justify-content-center align-items-center">
        <div className="signup-card card text-center p-4">
          <div className="card-body">
            <h1 className="card-title">Login</h1>
            <p className="card-text">Clean Rivers, Clean India - For a Healthier Tomorrow!</p>
            {error && <p className="text-danger text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control mb-2"
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control mb-2"
                placeholder="Password"
                required
              />
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

