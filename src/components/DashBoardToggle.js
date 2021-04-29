import React, { Component } from "react";

export default class DashBoardToggle extends Component {
  render() {
    return (
      <div>
        <div className="tabs">
          <div className="tab right" id="">
            Tweets
          </div>
          <div className="tab active">Hospitals</div>
          <div className="tab left">Oxygen</div>
          <div className="tab left">Medicine</div>
        </div>
      </div>
    );
  }
}
