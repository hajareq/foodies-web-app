import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SignUpCard from "./SignUpCard/SignUpCard";
import ProfileType from "../ProfileType";
import Interests from "../Recomendations";
import { connect } from "react-redux";
import { newUser } from "../../redux/actions/userAction";
import axios from "axios";

class SignUp extends Component {
  state = {
    profileType: false,
    interests: false,
    cuisines: []
  };
  handleOnSubmit = state => {
    this.setState({ profileType: true, ...state });
  };
  handleOnProfileChosen = () => {
    this.setState({ interests: true });
  };
  handleOnClickInterests = cuisines => {
    this.setState({ cuisines });
    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      image:
        "https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png",
      cuisines: this.state.cuisines
    };
    console.log(user);
    axios.post("http://localhost:8080/api/users", user).then(res => {
      this.props.newUser(res.data);
    });
  };
  render() {
    return (
      <Fragment>
        <Header withButtons />
        <div className="cover sign-in-cover">
          {!this.state.profileType && !this.state.interests && (
            <SignUpCard onSubmit={this.handleOnSubmit} />
          )}
          {this.state.profileType && !this.state.interests && (
            <ProfileType onProfileChosen={this.handleOnProfileChosen} />
          )}
          {this.state.profileType && this.state.interests && (
            <Interests onClick={this.handleOnClickInterests} />
          )}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, {
  newUser
})(SignUp);
