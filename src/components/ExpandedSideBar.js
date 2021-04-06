import React, { Component } from "react";

export default class ExpandedSideBar extends Component {
  onHoverOut = () => {
    let elem = document.getElementById("ExpandedSideBar");
    let pos = 100;

    this.animation = true;
    function animate() {
      if (pos === 0) {
        elem.style.display = "none";

        clearInterval(id);
      } else {
        pos -= 5;
        elem.style.left = pos + "%";
      }
    }
    let id = setInterval(animate, 1);
  };
  render() {
    return (
      <div className="Expand" id="ExpandedSideBar">
        <div className="Links">
          <div className="Element expandedList">Home</div>
          <div className="Element expandedList">About Us</div>
          <div className="Element expandedList">Trend</div>
          <div className="Element expandedList">News</div>
          <div className="Element expandedList" onClick={this.onHoverOut}>
            Close
          </div>
        </div>
      </div>
    );
  }
}
