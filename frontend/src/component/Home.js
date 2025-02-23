import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./styles/Home.css"; // Import custom styles

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content in Card */}
      <div className="overlay d-flex justify-content-center align-items-center">
        <div className="welcome-card card text-center p-4">
          <div className="card-body">
            <h1 className="card-welcome">
              Welcome to SwachhMitra
            </h1>
            <p className="card-text">
              It's a movement. Together, let's take a step toward a cleaner, healthier, and more beautiful India!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;




