import React, { Component } from "react";
import Input from "../../Input";
import "./assets/css/index.css";

class SignUpCard extends Component {
  render() {
    return (
      <div className="sign-up-container">
        <h1 className="sign-up">Sign Up</h1>
        <form className="sign-up-form">
          <Input label="Username*" />
          <Input label="Email*" />
          <Input label="Password*" />
          <button className="signup-button">Sign up</button>
        </form>
      </div>
    );
  }
}
export default SignUpCard;
