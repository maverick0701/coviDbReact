import React, { Component } from "react";
import { Search, DashBoardToggle } from "./index";
import { setDisplayDashboard, getTweeterData } from "../actions/setDashboard";
import DashboardBody from "./DashboardBody";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(setDisplayDashboard("Tweets"));
    this.props.dispatch(getTweeterData());
  }
  render() {
    let tweets;
    // console.log(this.props.tweets);
    if (this.props.tweets) {
      tweets = this.props.tweets;
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
              <div className="DashboardBodyHeader stateName">Delhi</div>
              {tweets.length !== 0 && <DashboardBody tweets={tweets} />}
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
  };
}

const connectedDashboardComponent = connect(mapStateToProps)(Dashboard);
export default connectedDashboardComponent;
