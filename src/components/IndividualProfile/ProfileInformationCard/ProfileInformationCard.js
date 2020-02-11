import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";
import Button from "../../Button";
import "./ProfileInformationCard.css";

class ProfileInformationCard extends Component {
  render() {
    return (
      <div className="profile-data-container">
        <div className="profile-data-cover">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              position: "relative"
            }}
          >
            <div className="profile-name">
              {this.props.userProfile.username}
            </div>

            <div>
              <Button
                onClick={
                  this.props.connectedProfile ? this.props.onFollow : null
                }
                width="115px"
                label={this.props.connectedProfile ? "Edit Profile" : "Follow"}
              />
            </div>

            {this.props.restaurant && (
              <div className="profile-information-card-restaurant-rating">
                <StarRatings
                  rating={2.403}
                  starDimension="20px"
                  starSpacing="1px"
                  starRatedColor="#002727"
                />
              </div>
            )}
          </div>
          <div>{this.props.userProfile.bio}</div>
          <div className="profile-data">
            <div className="profile-data-item">
              Posts <span className="number">{this.props.posts.length}</span>
            </div>
            <div className="profile-data-item">
              Followers{" "}
              <span className="number">
                {this.props.userProfile.followers.length}
              </span>
            </div>
            <div className="profile-data-item">
              Following{" "}
              <span className="number">
                {this.props.userProfile.following.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ProfileInformationCard.propTypes = {
  connectedProfile: PropTypes.bool,
  visitedProfile: PropTypes.bool,
  restaurant: PropTypes.bool
};

export default connect(null)(ProfileInformationCard);
