import React, { Component } from "react";

export default class ExpandedSideBar extends Component {
  render() {
    return (
      <div className="Expand Display">
        <div className="Links">
          <div className="Element expandedList">Home</div>
          <div className="Element expandedList">About Us</div>
          <div className="Element expandedList">Trend</div>
          <div className="Element expandedList">News</div>
        </div>
      </div>
    );
  }
}
