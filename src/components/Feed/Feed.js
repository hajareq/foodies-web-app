import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchRecipePosts } from "../../redux/actions/postActions";
import { fetchReviewPosts } from "../../redux/actions/postActions";
import axios from "axios";
import Header from "../Header";
import Post from "../Post";
import AddPost from "../AddPost/AddPost";
import "./assets/css/Feed.css";

class Feed extends Component {
  componentDidMount() {
    axios
      .all([
        axios.get("http://localhost:8080/api/post/recipe"),
        axios.get("http://localhost:8080/api/post/review")
      ])
      .then(
        axios.spread((resRecipe, resReview) => {
          this.props.fetchRecipePosts(resRecipe.data);
          this.props.fetchReviewPosts(resReview.data);
        })
      );
  }
  _getPostType = post => {
    if (post.cuisines) {
      return "recipe";
    } else if (post.offer) {
      return "offer";
    } else if (post.rating) {
      return "review";
    }
  };
  _renderPosts = () => {
    return this.props.post.map((item, index) => {
      return (
        <Post
          type={this._getPostType(item)}
          post={item}
          key={index}
          style={{ marginTop: "20px" }}
        />
      );
    });
  };
  render() {
    return (
      <Fragment>
        <Header withSections />
        <div className="posts-container">
          <div className="posts">
            <AddPost />
            {this._renderPosts()}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ post }) => ({ post });
export default connect(mapStateToProps, { fetchRecipePosts, fetchReviewPosts })(
  Feed
);
