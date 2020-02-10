import React, { Component, Fragment } from "react";
import IndividualProfile from "../IndividualProfile";
import RestaurantHeader from "../RestaurantHeader";

class RestaurantProfile extends Component {
  render() {
    return (
      <Fragment>
        <RestaurantHeader withSections />
        <IndividualProfile restaurant />
      </Fragment>
    );
  }
}
export default RestaurantProfile;
