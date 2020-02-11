import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Header from "../Header";
import ProfileInformationCard from "./ProfileInformationCard";
import ProfilePost from "../ProfilePost";
import "./IndividualProfile.css";

class IndividualProfile extends Component {
  state = {
    posts: [],
    user: {},
    isLoading: true
  };
  componentDidMount() {
    const { params } = this.props.match;
    axios
      .all([
        axios.get(`http://localhost:8080/api/post/recipe/${params.id}`),
        axios.get(`http://localhost:8080/api/post/review-user/${params.id}`),
        axios.get(`http://localhost:8080/api/user/${params.id}`)
      ])
      .then(
        axios.spread((resRecipe, resReview, resUser) => {
          const posts = resRecipe.data.concat(resReview.data);
          this.setState({ posts: posts, user: resUser.data, isLoading: false });
        })
      );
  }
  render() {
    if (this.state.isLoading) {
      return <div>wait</div>;
    }
    return (
      <div>
        {!this.props.restaurant && <Header withSections />}
        <div className="individual-profile-container">
          <div
            className="profile-img"
            style={{
              backgroundImage: `url(data:image/jpeg;base64,${this.state.user.image})`
            }}
          ></div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "75%" }}>
            <ProfileInformationCard
              connectedProfile
              restaurant={this.props.restaurant}
              userProfile={this.state.user}
              posts={this.state.posts}
            />
            <div className="individual-profile-posts">
              {this.state.posts.map((item, key) => {
                return (
                  <ProfilePost key={key} img={item.image} text={item.text} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

IndividualProfile.propTypes = {
  posts: PropTypes.array,
  restaurant: PropTypes.bool
};

IndividualProfile.defaultProps = {
  posts: [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
  ]
};

export default connect(null)(IndividualProfile);
