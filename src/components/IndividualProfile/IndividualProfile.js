import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import ProfileInformationCard from "./ProfileInformationCard";
import ProfilePost from "../ProfilePost";
import "./IndividualProfile.css";

class IndividualProfile extends Component {
  render() {
    return (
      <div>
        <Header withSections />
        <div className="individual-profile-container">
          <div
            className="profile-img"
            style={{
              backgroundImage: `url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*")`
            }}
          ></div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "75%" }}>
            <ProfileInformationCard connectedProfile />
            <div className="individual-profile-posts">
              {this.props.posts.map((item, key) => {
                return <ProfilePost key={key} img={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

IndividualProfile.propTypes = {
  posts: PropTypes.array
};

IndividualProfile.defaultProps = {
  posts: [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
  ]
};

export default IndividualProfile;