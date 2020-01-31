import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SignUpCard from "./SignUpCard/SignUpCard";
import ProfileType from "../ProfileType";
import Interests from "../Recomendations";
//import axios from "axios";

class SignUp extends Component {
  state = {
    profileType: false,
    interests: false,
    cuisines: []
  };
  handleOnSubmit = state => {
    this.setState({ profileType: true, ...state });
  };
  handleOnProfileChosen = () => {
    this.setState({ interests: true });
  };
  handleOnClickInterests = cuisines => {
    this.setState({ cuisines });
    // axios.post("http//localhost:8080/api/users").then(res =>this.props.)
  };
  render() {
    return (
      <Fragment>
        <Header withButtons />
        <div className="cover sign-in-cover">
          {!this.state.profileType && !this.state.interests && (
            <SignUpCard onSubmit={this.handleOnSubmit} />
          )}
          {this.state.profileType && !this.state.interests && (
            <ProfileType onProfileChosen={this.handleOnProfileChosen} />
          )}
          {this.state.profileType && this.state.interests && (
            <Interests onClick={this.handleOnClickInterests} />
          )}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default SignUp;
