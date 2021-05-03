import React, { Component } from "react";
import { Sidebar, Screen } from "./components/index";
import { getUserFromLocalStorage } from "./helpers/storage";
import "./App.css";
import { connect } from "react-redux";
import { logoutFunction, setAuthenticatedUserFunction } from "./actions/auth";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let user = getUserFromLocalStorage();
    let currentDate = new Date();

    if (user.exp * 10000 > currentDate.getTime() && this.props) {
      this.props.dispatch(setAuthenticatedUserFunction(user));
    } else {
      localStorage.removeItem("token");
      this.props.dispatch(logoutFunction());
    }
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
    auth: state.auth,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;

// export default App;
