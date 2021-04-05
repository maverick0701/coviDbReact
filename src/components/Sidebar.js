import React, { Component } from "react";
import SideSideBar from "./SideSideBar";
import ExpandedSideBar from "./ExpandedSideBar";
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <SideSideBar />
        <ExpandedSideBar />
      </div>
    );
  }
}
