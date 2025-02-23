import React, { useState } from "react";
import Navbar from "../component/MainNavbar";
import "./styles/Home.css"; 
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/api/contact/contactRegister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you for contacting us!", { position: "top-right" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to submit the form", { position: "top-right" });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again later.", { position: "top-right" });
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="contact_container">
        <h1 className="contact_h1 mt-4">Contact Us - Connect, Collaborate, Contribute!</h1>
        <div className="container contactus mt-3">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex flex-direction-row justify-content-center contact_box mt-3">
                <div className="card main_card">
                  <div className="text-center">
                    <MdLocationPin className="contact_icon mt-2" />
                    <h6 style={{ fontWeight: "bold", marginTop: "5px" }}>OUR MAIN OFFICE</h6>
                    <p className="px-2">123, Sarjapur, Bangalore, Karnataka - 560001, India</p>
                  </div>
                </div>
                <div className="card main_card">
                  <div className="text-center">
                    <FaPhoneAlt className="contact_icon mt-3" />
                    <h6 style={{ fontWeight: "bold", marginTop: "7px" }}>PHONE NUMBER</h6>
                    <p className="px-2">2490-xxxx-xx</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-direction-row justify-content-center contact_box mt-3">
                <div className="card main_card">
                  <div className="text-center">
                    <FaClock className="contact_icon mt-2" />
                    <h6 style={{ fontWeight: "bold", marginTop: "5px" }}>WORKING HOURS</h6>
                    <p className="px-2">Monday to Friday <br /> 9:00 am - 6:00 pm IST</p>
                  </div>
                </div>
                <div className="card main_card">
                  <div className="text-center">
                    <MdEmail className="contact_icon mt-2" />
                    <h6 style={{ fontWeight: "bold" }}>Email</h6>
                    <p className="px-2">hello@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <form onSubmit={handleSubmit} className="p-4 border rounded contactus_form">
                <h1 className="text-center form_heading">Contact US</h1>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <select
                    className="form-select"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button type="submit" className="btn btn-primary contact-submitbtn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
