import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/index.css";
import Logo from "./assets/foodies-logo.png";

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <img className="logo" src={Logo} alt="" />
          </li>
          <div className="buttons-wraper">
            <li>
              <Link to="/SignIn">
                <button className="sign-in-button">Sign in</button>
              </Link>
            </li>
            <li>
              <button className="sign-up-button">Sign up</button>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
export default Header;
