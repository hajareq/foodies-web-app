import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./PostOwner.css";
export default class PostOwner extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Link to={`/profile/${this.props.user.id}`}>
            <img
              alt={`${this.props.user.username}'s profile picture`}
              className="profile-picture"
              src={`data:image/jpeg;base64,${this.props.user.image}`}
            ></img>{" "}
          </Link>
          <Link to={`/profile/${this.props.user.id}`}>
            <span
              onClick={this._handleProfileOnClick}
              className="username-text"
            >
              {this.props.user.username}
            </span>
          </Link>
        </div>
      </div>
    );
  }
}
