import React, { Component } from "react";
import { Sidebar, Screen } from "./components/index";
import "./App.css";
import { getStateData } from "./actions/getState";
import { connect } from "react-redux";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(getStateData());
  }
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
