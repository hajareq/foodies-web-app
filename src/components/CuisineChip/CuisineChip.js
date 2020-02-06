import React, { Component } from "react";
import "./CuisineChip.css";

export default class CuisineChip extends Component {
  state = {
    selected: false
  };
  handleChipOnClick = () => {
    this.setState(
      prevState => ({
        selected: !prevState.selected
      }),
      () => {
        this.props.onClick();
      }
    );
  };
  render() {
    return (
      <div
        className={
          this.state.selected
            ? "cuisine-chip-container-selected"
            : "cuisine-chip-container-default"
        }
        onClick={this.handleChipOnClick}
      >
        {this.props.label}
      </div>
    );
  }
}
