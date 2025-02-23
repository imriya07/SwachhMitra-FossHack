import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"; 
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import MainNavbar from "./MainNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Home.css";

const ExploreEvent = () => {
  const location = useLocation();
  const selectedState = location.state?.selectedState || "Unknown State";
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedRiver, setSelectedRiver] = useState(null);
  const [showModal, setShowModal] = useState(false); 

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("eventRegistrationData");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          phone: "",
          dob: "",
          gender: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("eventRegistrationData", JSON.stringify(formData));
  }, [formData]);

  const stateEvents = {
    Maharashtra: {
      "Ongoing Events": ["Godavari", "Krishna"],
      "Upcoming Events": ["Panchganga", "Bhima"],
      "Completed Events": ["Ulhas", "Wardha"],
    },
    Assam: {
      "Ongoing Events": ["Brahmaputra"],
      "Upcoming Events": ["Dibang", "Lohit"],
      "Completed Events": ["Manas", "Jia Bharali"],
    },
    "Madhya Pradesh": {
      "Ongoing Events": ["Narmada"],
      "Upcoming Events": ["Tapti"],
      "Completed Events": ["Betwa", "Shipra"],
    },
    Kerala: {
      "Ongoing Events": ["Periyar"],
      "Upcoming Events": ["Chaliyar"],
      "Completed Events": ["Pamba", "Bharathapuzha"],
    },
  };

  const events = stateEvents[selectedState] || {
    "Ongoing Events": [],
    "Upcoming Events": [],
    "Completed Events": [],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem("eventRegistrationData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleRiverClick = (river, type) => {
    if (type === "Completed Events") {
      toast.error("This event is already completed. You can't register.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    setSelectedRiver(river);
    setShowModal(true); 
  };

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

  const handleRegister = () => {
    toast.success(`Successfully registered for ${selectedRiver} river event!`, {
      position: "top-right",
      autoClose: 3000,
    });

    localStorage.removeItem("eventRegistrationData"); 

    setFormData({
      name: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
    });

    setShowModal(false);
  };

  return (
    <div className="mainExplore_container">
      <ToastContainer /> {/* Toast container to display messages */}
      <MainNavbar />
      <div className="container mt-4">
        <h2 className="text-center mt-5 pt-5" style={{ color: "blue" }}>
          {selectedState} - River Cleanup Events
        </h2>

        <div className="row mt-4">
          {Object.keys(events).map((eventType, index) => (
            <div key={index} className="col-md-4">
              <div className="card eventExpore_card">
                <div className="card-body">
                  <h5 className="card-title text-center">{eventType}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedEvent(eventType)}
                  >
                    View {eventType}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedEvent && (
          <div className="mt-4">
            <h3 className="text-center">{selectedEvent}</h3>
            <div className="row">
              {events[selectedEvent].length > 0 ? (
                events[selectedEvent].map((river, index) => (
                  <div key={index} className="col-md-4 mt-3">
                    <div
                      className="card"
                      onClick={() => handleRiverClick(river, selectedEvent)}
                      style={{ backgroundColor: "#F5EBD5" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title text-center" style={{ color: "black" }}>
                          {river}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No events available.</p>
              )}
            </div>
          </div>
        )}

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Register for {selectedRiver} Cleanup</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="p-2">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <select
                  className="form-control"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Doesn't want to mention</option>
                </select>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="success" onClick={handleRegister} disabled={!isFormValid}>
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ExploreEvent;
