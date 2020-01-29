import React, { Component } from "react";
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
            <li className="perm_identity">
              <SearchIcon style={{ marginTop: "12px" }} />
              <input
                type="text"
                className="search"
                placeholder="Type your search here..."
              />

              <PersonIcon
                fontSize="large"
                style={{ marginRight: "1rem", marginTop: "10px" }}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}
Button.propTypes = {
  withButtons: PropTypes.bool,
  withSections: PropTypes.bool
};

export default Header;
