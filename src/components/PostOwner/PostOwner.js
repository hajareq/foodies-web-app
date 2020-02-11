import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./PostOwner.css";
export default class PostOwner extends Component {
  // _handleProfileOnClick = ()=>{
  //     return <Redirect to={{
  //         pathname: `/profile/${this.props.user.username}`,
  //         state: this.props.user
  //     }}
  // }
  _handleProfileOnClick = () => {};
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <img
            onClick={this._handleProfileOnClick}
            alt={`${this.props.user.username}'s profile picture`}
            className="profile-picture"
            src={`data:image/jpeg;base64,${this.props.user.image}`}
          ></img>
          <span onClick={this._handleProfileOnClick} className="username-text">
            {this.props.user.username}
          </span>
        </div>
      </div>
    );
  }
}
