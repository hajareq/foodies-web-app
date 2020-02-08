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
    const user = {
      username: this.state.username.replace(/\s/g, ""),
      password: this.state.password,
      email: this.state.email,
      image:
        "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",
      cuisines: cuisines
    };
    axios.post("http://localhost:8080/api/account/user", user).then(res => {
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
