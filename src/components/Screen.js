import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home, State, Dashboard, Login, Chat, SignUp, Sidebar } from "./index";

class Screen extends Component {
  render() {
    return (
      <Router>
        <Sidebar />
        <div className="Screen">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/statewise/:location"
              render={(props) => {
                return <State {...props} />;
              }}
            />
            <Route
              exact
              path="/Dashboard"
              render={(props) => {
                return <Dashboard {...props} />;
              }}
            />
            <Route
              exact
              path="/login"
              render={(props) => {
                return <Login {...props} />;
              }}
            />
            <Route
              exact
              path="/SignUp"
              render={(props) => {
                return <SignUp {...props} />;
              }}
            />
            <Route
              exact
              path="/Chat"
              render={(props) => {
                return <Chat {...props} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Screen;
