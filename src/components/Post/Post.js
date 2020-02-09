import React, { Component, Fragment } from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import "./Post.css";
import PostModal from "../PostModal/PostModal";

class Post extends Component {
  state = {
    showModal: false
  };
  _handleOnClick = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };
  _handleOnClose = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <Fragment>
        <div className="post-container" onClick={this._handleOnClick}>
          <div className="profile-container">
            <img
              alt={`${this.props.post.user.username}'s profile picture`}
              className="profile-picture"
              src={`data:image/jpeg;base64,${this.props.post.user.image}`}
            ></img>
            <span className="username-text">
              {this.props.post.user.username}
            </span>
          </div>
          <div className="image-text-container">
            <img
              alt=""
              className="post-picture"
              src={`data:image/jpeg;base64,${this.props.post.image}`}
            ></img>
            <span className="post-text">{this.props.post.text}</span>
          </div>
          <div className="reacts-comments-container">
            <div className="post-reacts">
              <ThumbUpAltIcon />
              {this.props.post.reactsNumber}
            </div>
            <div className="post-comments">
              <CommentIcon />
              {this.props.post.commentsNumber}
            </div>
          </div>
        </div>
        {this.state.showModal && (
          <PostModal showModal onClose={this._handleOnClose} />
        )}
      </Fragment>
    );
  }
}

Post.defaultProps = {
  post: {
    user: { username: "Selena GOMEZ", image: "" },
    username: "Selena GOMEZ",
    profilePicture:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    text: "this is a post",
    reactsNumber: 19,
    commentsNumber: 49,
    comments: [
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
        commentText: "this is the first comment"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
        commentText: "this is the second comment"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
        commentText: "this is the third comment"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
        commentText: "this is the fourth comment"
      }
    ],
    reacts: [
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
      },
      {
        username: "Reda ZOURANE",
        profilePicture:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
      }
    ]
  }
};

export default Post;
