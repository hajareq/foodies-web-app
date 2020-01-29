import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CommentIcon from "@material-ui/icons/Comment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import "./ProfilePost.css";

class ProfilePost extends Component {
  state = {
    hover: false
  };
  handleMouseEnter = () => {
    this.setState({ hover: true });
  };
  hanldeMouseLeave = () => {
    this.setState({ hover: false });
  };
  render() {
    return (
      <Fragment>
        <div
          className="profile-post-container"
          style={{ backgroundImage: `url(${this.props.img})` }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.hanldeMouseLeave}
        >
          <div className="overlay"></div>
          {this.state.hover && (
            <div className="profile-post-icons-container">
              <div className="profile-post-icons">
                <div className="profile-post-icon">
                  <ThumbUpAltIcon fontSize="large" />
                  <div className="profile-post-numbers">100K</div>
                </div>
                <div className="profile-post-icon">
                  <CommentIcon fontSize="large" />
                  <div className="profile-post-numbers">100K</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
ProfilePost.propTypes = {
  img: PropTypes.string
};

ProfilePost.defaultProps = {
  img:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
};

export default ProfilePost;
