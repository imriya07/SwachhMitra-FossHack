import React from "react";
import Navbar from "../component/MainNavbar";
import "./styles/Home.css";
import bg from "../assets/mission.jpg";
import goal from "../assets/goal.jpg";
import vission from "../assets/vission.jpg";
import "./styles/Home.css"; 
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container text-center">
        <div className="image-overlay">
          <h1 className="display-4 fw-bold">Mission and Vision</h1>
        </div>
        <img src={bg} alt="SwachhMitra Mission" className="mission img-fluid" />
      </div>
      
      <div className="mission-bg py-5">
        <div className="container text-center px-3 d-flex flex-direction-column justify-content-center align-items-center">
            <div>
            <p className="mission_p">
            SwachhMitra is a community-driven platform dedicated to promoting cleanliness, 
            environmental awareness, and sustainable living across India.
          </p>
          <p className="mission_p">
            We believe that cleanliness is not just a responsibility but a shared commitment. 
            Through SwachhMitra, individuals can participate in local cleanup drives, 
            organize their own events, track the collective environmental impact, 
            and share inspiring volunteer stories that motivate others to take action.
          </p>
          <p className="mission_p">
            By providing an accessible platform, we aim to empower people from all walks of life 
            to contribute to the Swachh Bharat mission and instill a sense of pride and ownership 
            in maintaining clean surroundings.
          </p>
            </div>
          
        </div>
        <div className="text-center container mission_h mt-4">Our mission is to bring together citizens, organizations, schools, and local communities in a united effort to make India cleaner, greener, and more beautiful for present and future generations.</div>
        <div className="container mt-5">
          <div className="row ">
            <div className="col-md-4 col-lg-6 text-center position-relative d-inline-block">
                <img
                  src={goal}
                  alt="SwachhMitra Mission"
                  className="img-fluid rounded our_img"
                />
                <p className="goal-text position-absolute top-50 start-50 translate-middle text-white fw-bold">
                  OUR VISSION
                </p>
            </div>
            <div className="col-md-4 col-lg-6 mt-5">
                <p className="our_vision text-center mt-5">Our vision is to create a nationwide movement where every citizen becomes a SwachhMitra (Friend of Cleanliness), working together to reduce pollution, improve public spaces, and foster environmental responsibility.</p>
            </div>
          </div>
          <div className="row mt-5">
          <div className="col-md-4 col-lg-6 mt-5">
                <p className="our_vision text-center mt-5">Our mission is to bring together citizens, organizations, schools, and local communities in a united effort to make India cleaner, greener, and more beautiful for present and future generations.</p>
            </div>
            <div className="col-md-4 col-lg-6 text-center position-relative d-inline-block">
                <img
                  src={vission}
                  alt="SwachhMitra Mission"
                  className="img-fluid rounded our_img"
                />
                <p className="goal-text position-absolute top-50 start-50 translate-middle text-white fw-bold">
                  OUR MISSION
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
