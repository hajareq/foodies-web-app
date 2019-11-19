import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/index.css";
import Logo from "./assets/foodies-logo.png";
import Button from "../Button";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">
              <img className="logo" src={Logo} alt="" />
            </Link>
          </li>
          {this.props.withButtons && (
            <div className="buttons-wraper">
              <li>
                <Button label="Sign in" linkTo="/SignIn" outlined />
              </li>
              <li>
                <Button label="Sign Up" linkTo="/SignUp" />
              </li>
            </div>
          )}
        </ul>
      </div>
    );
  }
}
Button.propTypes = {
  withButtons: PropTypes.bool
};

export default Header;
