import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/users/register", formData);
      if (response.status === 201) {
        toast.success("Register successful! Redirecting to login...", {
          position: "top-right",
          autoClose: 3000, // Closes after 3 seconds
        });

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="home-container">
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay d-flex justify-content-center align-items-center">
        <div className="signup-card card text-center p-4">
          <div className="card-body">
            <h1 className="card-title">Sign Up</h1>
            <p className="card-text">Clean Rivers, Clean India - For a Healthier Tomorrow!</p>
            {error && <p className="text-danger text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name *"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email *"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password *"
                  className="form-control"
                  required
                />
                <span
                  className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button type="submit" className="btn btn-primary signup_btn">
                  SIGNUP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
