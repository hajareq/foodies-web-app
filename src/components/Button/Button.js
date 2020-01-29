import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./asstets/css/Button.css";

class Button extends Component {
  render() {
    const style = this.props.outlined ? "outlined" : "filled";
    return (
      <Fragment>
        <Link
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}
          to={this.props.linkTo}
        >
          <button
            className={style}
            style={{
              width: this.props.width,
              fontSize: "17px",
              fontWeight: "600"
            }}
            onClick={this.props.onClick}
          >
            {this.props.label}
          </button>
        </Link>
      </Fragment>
    );
  }
}

Button.propTypes = {
  linkTo: PropTypes.string,
  label: PropTypes.string,
  outlined: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
