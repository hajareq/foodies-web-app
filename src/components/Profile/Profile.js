import React, { Component } from "react";
import PersonIcon from "@material-ui/icons/Person";
import FastfoodIcon from "@material-ui/icons/Fastfood";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-cards-container">
        <div className="individual-profile">
          <PersonIcon />
          <span className="profile-text">Individual</span>
        </div>
        <div className="restaurant-profile">
          <FastfoodIcon />
          <span className="profile-text">Restaurant</span>
        </div>
      </div>
    );
  }
}
