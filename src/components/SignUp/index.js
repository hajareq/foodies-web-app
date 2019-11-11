import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Input from "../Input";

class SignUp extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="cover sign-in-cover">
          <div className="sign-in-container">
            <h1 className="sign-in">Sign Up</h1>
            <form className="sign-in-form">
              <Input label="First Name*" />
              <Input label="Last Name*" />
              <Input label="Username*" />
              <Input label="Email*" />
              <Input label="Password*" />
              <button className="signup-button">Sign up</button>
            </form>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default SignUp;
