import React, { Component } from "react";
import { Search, DashBoardToggle } from "./index";
import { setDisplayDashboard } from "../actions/setDashboard";
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
            {/* <header className="DashboardHeader">
              <div className="DashboardLocation stateName">Delhi</div>
            </header> */}
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
