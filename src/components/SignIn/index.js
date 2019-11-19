import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./assets/css/index.scss";
import Input from "../Input";

class SignIn extends Component {
  render() {
    return (
      <Fragment>
        <Header withButtons />
        <div className="cover sign-in-cover">
          <div className="sign-in-container">
            <h1 className="sign-in">Sign In</h1>
            <form className="sign-in-form">
              <Input label="Email" />
              <Input label="Password" />
              <button className="signup-button">Sign in</button>
            </form>
            <div style={{ margin: "20px 0 0 1.9rem" }}>
              Don't have an account ? <Link to="/SignUp">SignUp</Link>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default SignIn;
