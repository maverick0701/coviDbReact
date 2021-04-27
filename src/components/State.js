import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getDistrictWiseData,
  getSelectedSateBaseNum,
  getStateTrends,
} from "../actions/getDistrict";
import { ApiUrls } from "../helpers/Api";
class State extends Component {
  componentDidMount() {
    let urls = ApiUrls.district_time_series();
    const { params } = this.props.match;
    let location = params.location;
    this.props.dispatch(getDistrictWiseData(location));
    this.props.dispatch(getStateTrends(location));
    this.props.dispatch(getSelectedSateBaseNum(location));
  }
  render() {
    return (
      <div>
        <div className="stateDisplay">
          <div className="stateInfoCard"></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    district: state.district,
  };
}

const connectedStateComponent = connect(mapStateToProps)(State);
export default connectedStateComponent;
