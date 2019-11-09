import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./assets/css/index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <div className="cover"></div>
          <div className="primary-text">A social network for all your</div>
          <div className="secondary-text">FOOD DESIRES</div>
          <div className="home-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin est ex, quis egestas nisi tempus et.
          </div>
          <button
            className="sign-up-button"
            style={{ position: "relative", bottom: "15rem", left: "10%" }}
          >
            Get Started
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
