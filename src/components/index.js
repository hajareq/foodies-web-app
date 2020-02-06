import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Post from "./Post";
import Feed from "./Feed/Feed";
import AddPost from "./AddPost";
import "./index.css";
import IndividualProfile from "./IndividualProfile/IndividualProfile";
import CuisineChip from "./CuisineChip";
import isAuthentificated from "../utils/isAuthentificated";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/AddPOst" component={AddPost} />
            <Route exact path="/CuisineChip" component={CuisineChip} />
            <Route exact path="/Feed" component={isAuthentificated(Feed)} />
            <Route exact path="/Post" component={isAuthentificated(Post)} />
            <Route
              exact
              path="/Profile"
              component={isAuthentificated(IndividualProfile)}
            />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
