import React, { Component } from "react";
import { Search, DashBoardToggle } from "./index";
import { setDisplayDashboard } from "../actions/setDashboard";
import DashboardBody from "./DashboardBody";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(setDisplayDashboard("Tweets"));
  }
  render() {
    return (
      <div>
        <div className="headerSearch">
          <Search />
          <div className="DashboardBodyBox">
            {this.props.dashboard.display && (
              <DashBoardToggle
                dispatch={this.props.dispatch}
                display={this.props.dashboard}
              />
            )}
            <div className="DashboardBody">
              <div className="DashboardBodyHeader stateName">Delhi</div>
              <DashboardBody />
            </div>
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

const connectedDashboardComponent = connect(mapStateToProps)(Dashboard);
export default connectedDashboardComponent;
