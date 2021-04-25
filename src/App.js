import React, { Component } from "react";
import { Sidebar, Screen } from "./components/index";
import "./App.css";

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

export default App;

// export default App;
