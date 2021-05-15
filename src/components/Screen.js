import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {
  Home,
  State,
  Dashboard,
  Login,
  Chat,
  SignUp,
  Sidebar,
  AboutUs,
} from "./index";

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
              path="/statewise"
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
              path="/triage"
              render={(props) => {
                return <Chat {...props} />;
              }}
            />
            <Route
              exact
              path="/AboutUs"
              render={(props) => {
                return <AboutUs {...props} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Screen;

//Thiis is bar chart
