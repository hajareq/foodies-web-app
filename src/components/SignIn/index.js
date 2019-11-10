import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./assets/css/index.css";

class SignIn extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="cover">
          <div className="sign-in-container">
            <h1 className="sign-in">Sign In</h1>
            <form className="sign-in-form">
              <div>
                <div className="email">
                  <label>Email</label>
                </div>
                <input
                  className="holder"
                  type="text"
                  name="Email"
                  placeholder="Your email.."
                ></input>
              </div>
              <div>
                <div className="password">
                  <label>Password</label>
                </div>
                <input
                  className="holder"
                  type="password"
                  name="password"
                  placeholder="Your password.."
                ></input>
              </div>
              <button
                className="sign-up-button"
                style={{ height: "40px", width: "22.34rem", marginLeft: "0" }}
              >
                Sign in
              </button>
            </form>
            <div style={{ margin: "20px 0 0 1.9rem" }}>
              Don't have an account ? <Link>SignUp</Link>
            </div>
          </div>
        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default SignIn;
