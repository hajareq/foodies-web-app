import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SignUpCard from "./SignUpCard/SignUpCard";
import ProfileType from "../ProfileType";

class SignUp extends Component {
  state = {
    profileType: false,
    interests: false
  };
  handleOnSubmit = () => {
    this.setState({ profileType: true });
  };
  render() {
    return (
      <Fragment>
        <Header withButtons />
        <div className="cover sign-in-cover">
          {!this.state.profileType && !this.state.interests && (
            <SignUpCard onSubmit={this.handleOnSubmit} />
          )}
          {this.state.profileType && !this.state.interests && <ProfileType />}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default SignUp;
