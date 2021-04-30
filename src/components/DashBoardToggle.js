import React, { Component } from "react";
import { setDisplayDashboard } from "../actions/setDashboard";
import { connect } from "react-redux";
class DashBoardToggle extends Component {
  toggleTabs = (e) => {
    console.log(e.target);
    this.props.dispatch(setDisplayDashboard(e.target.innerText));
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

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
  };
}

const connectedDashboardComponent = connect(mapStateToProps)(DashBoardToggle);
export default connectedDashboardComponent;
