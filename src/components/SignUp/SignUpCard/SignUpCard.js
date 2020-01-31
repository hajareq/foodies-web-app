import React, { Component } from "react";
import Input from "../../Input";
import Button from "../../Button";
import "./assets/css/index.css";

class SignUpCard extends Component {
  state = {
    email: "",
    username: "",
    password: ""
  };
  handleOnChange = (value, name) => {
    this.setState({
      [name]: value
    });
  };
  handleOnSubmit = () => {
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div className="sign-up-container">
        <h1 className="sign-up">Sign Up</h1>
        <form className="sign-up-form" onSubmit={this.handleOnSubmit}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            <Input
              label="Email*"
              name="email"
              value="this.state.email"
              onChange={this.handleOnChange}
            />
            <Input
              label="Username*"
              name="username"
              value="this.state.username"
              onChange={this.handleOnChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <Input
              label="Password*"
              name="password"
              value="this.state.password"
              onChange={this.handleOnChange}
            />
            <Input
              label="Confirm Password*"
              name="confirmPassword"
              value="this.state.confirmPassword"
              onChange={this.handleOnChange}
            />
          </div>

          <Button width="50%" label="Sign Up" onClick={this.handleOnSubmit} />
        </form>
      </div>
    );
  }
}
export default SignUpCard;
