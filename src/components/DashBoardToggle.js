import React, { Component } from "react";

export default class DashBoardToggle extends Component {
  toggleTabs = (e) => {
    console.log(e.target);

    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  };
  render() {
    return (
      <div>
        <div className="tabs">
          <div className="tab active" onClick={this.toggleTabs}>
            Tweets
          </div>
          <div className="tab" onClick={this.toggleTabs}>
            Hospitals
          </div>
          <div className="tab" onClick={this.toggleTabs}>
            Oxygen
          </div>
          <div className="tab" onClick={this.toggleTabs}>
            Medicine
          </div>
        </div>
      </div>
    );
  }
}
