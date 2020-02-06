import React, { Component } from "react";
import ProfileTypeCard from "../ProfileTypeCard";
import "./assets/css/ProfileType.css";

class ProfileType extends Component {
  render() {
    return (
      <div className="profile-cards-container sign-in-container">
        <ProfileTypeCard
          onClick={this.props.onProfileChosen}
          type="Individual"
        />
        <ProfileTypeCard type="Restaurant" />
      </div>
    );
  }
}

export default ProfileType;
