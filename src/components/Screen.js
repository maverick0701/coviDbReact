import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./table";
import axios from "axios";
import { ApiUrls } from "../helpers/Api";
class Screen extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Screen">
        <Table />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.state,
  };
}

const connectedScreenComponent = connect(mapStateToProps)(Screen);

export default connectedScreenComponent;
