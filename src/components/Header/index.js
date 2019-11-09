import React, { Component } from "react";
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
              <button className="sign-in-button">Sign in</button>
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
