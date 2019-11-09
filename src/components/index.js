import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
