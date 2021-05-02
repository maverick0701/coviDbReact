import React, { Component } from "react";
import {
  Search,
  DashBoardToggle,
  HospitalListDisplay,
  OxygenLIst,
} from "./index";
import {
  setDisplayDashboard,
  getTweeterData,
  getDataHospitalList,
  getOxyListData,
} from "../actions/setDashboard";
import DashboardBody from "./DashboardBody";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(setDisplayDashboard("Tweets"));
    this.props.dispatch(getTweeterData());
    this.props.dispatch(getDataHospitalList());
    this.props.dispatch(getOxyListData());
  }
  render() {
    let tweets;
    let location;
    let display;
    let hospitalList;
    let oxyList;
    // console.log(this.props.tweets);
    if (this.props.dashboard) {
      display = this.props.dashboard.display;
    }
    if (this.props.tweets) {
      tweets = this.props.tweets;
      location = this.props.dashboard.location;
    }
    if (this.props.hospitalList) {
      hospitalList = this.props.hospitalList;
    }
    if (this.props.oxyList) {
      oxyList = this.props.oxyList;
    }

    // console.log(tweets, "****");
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
              <div className="DashboardBodyHeader stateName">{location}</div>
              {display === "Tweets" && tweets.length !== 0 && (
                <DashboardBody tweets={tweets} />
              )}
              {display === "Hospitals" && hospitalList && (
                <HospitalListDisplay hospitalList={hospitalList} />
              )}
              {display === "Oxygen" && hospitalList && (
                <OxygenLIst oxyList={oxyList} />
              )}
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
    tweets: state.dashboard.tweets,
    hospitalList: state.dashboard.hospitalList,
    oxyList: state.dashboard.oxyList,
  };
}

const connectedDashboardComponent = connect(mapStateToProps)(Dashboard);
export default connectedDashboardComponent;
