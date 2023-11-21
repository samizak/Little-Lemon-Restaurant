import React from "react";
import "../components/styles/HeroSection.css";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import HeroImage from "../components/assets/gourmet.jpg";

const HeroSection = () => {
  return (
    <div data-testid="hero-section" className="hero-section-background">
      <div className="hero-section-container">
        <div className="section-left">
          <h1 data-testid="hero-title">Little Lemon</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <Link data-testid="hero-button" to="/reservations">
            <button className="btn">Reserve a Table</button>
          </Link>
        </div>
        <div className="section-right">
          <div className="image-box">
            <img src={HeroImage} alt="Serving delicious dish" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
