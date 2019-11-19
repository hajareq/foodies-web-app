import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./asstets/css/Button.css";

class Button extends Component {
  render() {
    const style = this.props.outlined ? "outlined" : "filled";
    return (
      <Fragment>
        <Link to={this.props.linkTo}>
          <button className={style}>{this.props.label}</button>
        </Link>
      </Fragment>
    );
  }
}

Button.propTypes = {
  linkTo: PropTypes.string,
  label: PropTypes.string,
  outlined: PropTypes.bool
};

export default Button;
