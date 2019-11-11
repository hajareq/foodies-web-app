import React, { Component } from "react";
import "./Input.scss";

export default class Input extends Component {
  render() {
    return (
      <div className="group">
        <input type="text" required></input>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>{this.props.label}</label>
      </div>
    );
  }
}
