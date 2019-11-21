import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SignUpCard from "./SignUpCard/SignUpCard";
class SignUp extends Component {
  render() {
    return (
      <Fragment>
        <Header withButtons />
        <div className="cover sign-in-cover">
          <SignUpCard />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default SignUp;
