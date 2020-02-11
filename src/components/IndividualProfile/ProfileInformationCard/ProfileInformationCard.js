import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";
import Button from "../../Button";
import "./ProfileInformationCard.css";

class ProfileInformationCard extends Component {
  render() {
    console.log(this.props.userProfile.followers);
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
            {this.props.connectedProfile && (
              <div>
                <Button width="115px" label="Edit Profile" linkTo="/SignUp" />
              </div>
            )}
            {this.props.visitedProfile && (
              <Button width="115px" label="Follow" linkTo="/SignUp" />
            )}
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
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            non elit commodo, pharetra odio condimentum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vestibulum non elit commodo,
            pharetra odio condimentum.
          </div>
          <div className="profile-data">
            <div className="profile-data-item">
              Posts <span className="number">1.7K</span>
            </div>
            <div className="profile-data-item">
              Followers{" "}
              <span className="number">{this.props.userProfile.followers}</span>
            </div>
            <div className="profile-data-item">
              Following{" "}
              <span className="number">
                {/* {this.props.auth.user.following.length} */}
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
