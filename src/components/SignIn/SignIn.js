import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "./assets/css/index.scss";
import Input from "../Input";
import validateInput from "../../Validation/SignUp";
import axios from "axios";
import { connect } from "react-redux";
import { logIn } from "../../redux/actions/logInAction";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };
  handleOnChange = (value, name) => {
    this.setState({
      [name]: value
    });
  };
  isValid = () => {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  };
  handleOnSubmit = e => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      axios
        .post(
          `http://localhost:8080/api/authenticate?username=${this.state.email}&password=${this.state.password}`
        )
        .then(res => {
          this.props.logIn(res.data);
          console.log(res.headers);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  };
  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        <Header withButtons />
        <div className="cover sign-in-cover">
          <div className="sign-in-container">
            <h1 className="sign-in">Sign In</h1>
            <form className="sign-in-form" onSubmit={this.handleOnSubmit}>
              <Input
                label="Email*"
                type="text"
                name="email"
                value="this.state.email"
                onChange={this.handleOnChange}
              />
              {errors.email && (
                <span className="sign-in-error">{errors.email}</span>
              )}
              <Input
                type="password"
                label="Password*"
                name="password"
                value="this.state.password"
                onChange={this.handleOnChange}
              />
              {errors.password && (
                <span className="sign-in-error">{errors.password}</span>
              )}
              <div style={{ marginTop: "10px" }}>
                <button className="signup-button" onClick={this.handleOnSubmit}>
                  Sign in
                </button>
              </div>
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

export default connect(null, { logIn })(SignIn);
