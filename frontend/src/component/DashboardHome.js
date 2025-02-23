import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Home.css";
import fort from "../assets/fort.jpg";
import tea from "../assets/tea.jpg";
import mp from "../assets/madhyaP.jpg";
import kerala from "../assets/kerala.jpg";
import gujarat from "../assets/gujarat.jpg";
import odisa from "../assets/odisa.jpg";
import karnataka from "../assets/karnataka.jpg";
import wb from "../assets/wb.jpg";

const DashboardHome = () => {
  const navigate = useNavigate(); // Hook for navigation

  const places = [
    { img: fort, name: "Maharashtra" },
    { img: tea, name: "Assam" },
    { img: mp, name: "Madhya Pradesh" },
    { img: kerala, name: "Kerala" },
    { img: gujarat, name: "Gujarat" },
    { img: odisa, name: "Odisha" },
    { img: wb, name: "West Bengal" },
    { img: karnataka, name: "Karnataka" },
  ];

  return (
    <div className="dashboard-home container-fluid py-2">
      <h1 className="heading text-center">Join Hands for a Cleaner India!</h1>
      <p className="subheading text-center">
        Every action counts. Be the change - become a <b>SwachhMitra</b> today!
      </p>

      {/* Card Section */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          {places.map((place, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card home_card shadow-sm">
                <img src={place.img} alt={${place.name} image} className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="place-name">{place.name}</h5>
                  <button
                    className="btn btn-success mt-2"
                    onClick={() =>
                      navigate("/explore-event", { state: { selectedState: place.name } })
                    }
                  >
                    Explore Event
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;





