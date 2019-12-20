import React, { Component } from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import "./Post.css";
export default class Post extends Component {
  render() {
    return (
      <div className="post-container">
        <div className="profile-container">
          <img
            alt={`${this.props.post.username}'s profile picture`}
            className="profile-picture"
            src={this.props.post.profilePicture}
          ></img>
          <span className="username-text">{this.props.post.username}</span>
        </div>
        <div className="image-text-container">
          <img
            alt=""
            className="post-picture"
            src={this.props.post.postPicture}
          ></img>
          <span className="post-text">{this.props.post.postText}</span>
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
    );
  }
}

Post.defaultProps = {
  post: {
    username: "Reda ZOURANE",
    profilePicture:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
    postPicture:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
    postText: "this is a post",
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
