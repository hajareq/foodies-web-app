import React, { Component, Fragment } from "react";
import Header from "../Header";
import Post from "../Post";
import "./assets/css/Feed.css";

class Feed extends Component {
  _renderPosts = () => {
    let posts = [];
    for (let i = 0; i < 6; i++) {
      posts.push(<Post key={i} style={{ marginTop: "20px" }} />);
    }
    return posts;
  };
  render() {
    return (
      <Fragment>
        <Header withSections />
        <div className="posts-container">
          <div className="posts">{this._renderPosts()}</div>
        </div>
      </Fragment>
    );
  }
}
export default Feed;
