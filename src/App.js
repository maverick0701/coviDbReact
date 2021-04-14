import React, { Component } from "react";
import { Sidebar, Screen } from "./components/index";
import "./App.css";

import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Screen />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.state,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;

// export default App;
