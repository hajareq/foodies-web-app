import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Recomendations from "./Recomendations/Recomendations";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Recomendations" component={Recomendations} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
