import React, { Component, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "./assets/css/Header.css";
import Logo from "./assets/foodies-logo.png";
import Button from "../Button";
import PropTypes from "prop-types";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import StarsIcon from "@material-ui/icons/Stars";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

class Header extends Component {
  state = {
    profileClicked: false
  };
  handleClick = () => {
    if (!this.state.profileClicked) {
      document.addEventListener("mousedown", this.handleClickOutside);
    } else {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    this.setState(prevState => ({
      profileClicked: !prevState.profileClicked
    }));
  };

  handleClickOutside = e => {
    if (this.node.contains(e.target)) {
      document.removeEventListener("mousedown", this.handleClickOutside);
      return;
    }
    this.handleClick();
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        <ul>
          <li>
            <Link to="/">
              <img className="logo" src={Logo} alt="" />
            </Link>
          </li>
          {this.props.withSections && (
            <div className="sections-wrapper">
              <NavLink
                exact
                to="/Feed"
                className="sections"
                activeStyle={{
                  borderBottom: "4px solid #8de4af"
                }}
              >
                <HomeIcon />
                <span className="section-label">Home</span>
              </NavLink>
              <Link className="sections">
                <FastfoodIcon />
                <span className="section-label">Recepies</span>
              </Link>
              <Link className="sections">
                <RestaurantIcon />
                <span className="section-label">Restaurants</span>
              </Link>
              <Link className="sections">
                <StarsIcon />
                <span className="section-label">Recommandations</span>
              </Link>
            </div>
          )}
          {this.props.withButtons && (
            <div className="buttons-wraper">
              <li>
                <Button
                  width="95px"
                  label="Sign in"
                  linkTo="/SignIn"
                  outlined
                />
              </li>
              <li>
                <Button width="95px" label="Sign Up" linkTo="/SignUp" />
              </li>
            </div>
          )}
          {this.props.withSections && (
            <Fragment>
              <div className="perm_identity">
                <SearchIcon style={{ marginTop: "12px" }} />
                <input
                  type="text"
                  className="search"
                  placeholder="Type your search here..."
                />
              </div>
            </Fragment>
          )}
        </ul>
        {this.props.withSections && (
          <div
            style={{
              backgroundColor: "#002727",
              borderBottom: "1px solid darkslategrey"
            }}
            ref={node => {
              this.node = node;
            }}
          >
            <PersonIcon
              fontSize="large"
              style={{
                marginRight: "1rem",
                marginTop: "10px",
                color: "#8DE4AF",
                cursor: "pointer"
              }}
              onClick={this.handleClick}
            />
            {this.state.profileClicked && (
              <div className="header-drop-down">
                <div className="header-name">
                  <FingerprintIcon style={{ marginRight: "7px" }} />
                  John.doe@gmail.com
                </div>
                <Link to="/profile">
                  <div className="header-profile">
                    <PersonIcon style={{ marginRight: "7px" }} /> Profile
                  </div>
                </Link>
                <div className="header-log-out">
                  <ExitToAppIcon style={{ marginRight: "7px" }} />
                  Log out
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
Button.propTypes = {
  withButtons: PropTypes.bool,
  withSections: PropTypes.bool
};

export default Header;
