import React, { Component } from "react";
import Input from "../../Input";
import Button from "../../Button";
import "./assets/css/index.css";

class SignUpCard extends Component {
  render() {
    return (
      <div className="sign-up-container">
        <h1 className="sign-up">Sign Up</h1>
        <form className="sign-up-form">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            <Input label="Email*" />
            <Input label="Username*" />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <Input label="Password*" />
            <Input label="Confirm Password*" />
          </div>

          <Button width="50%" label="Sign Up" onClick={this.props.onSubmit} />
        </form>
      </div>
    );
  }
}
export default SignUpCard;
