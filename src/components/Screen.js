import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home, State, Dashboard, Login } from "./index";

class Screen extends Component {
  render() {
    return (
      <Router>
        <div className="Screen">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/statewise/:location"
              render={(props) => {
                return <State {...props} />;
              }}
            />
            <Route
              path="/Dashboard"
              render={(props) => {
                return <Dashboard {...props} />;
              }}
            />
            <Route
              path="/login"
              render={(props) => {
                return <Login {...props} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Screen;
