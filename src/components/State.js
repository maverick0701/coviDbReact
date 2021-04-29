import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getDistrictWiseData,
  getSelectedSateBaseNum,
  getStateTrends,
} from "../actions/getDistrict";
import {
  StateDisplay,
  TopDistric,
  CovidInfoBox,
  ChartStateDisplay,
} from "./index";
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
    let { whatToDisplay } = this.props.district;
    return (
      <div>
        <StateDisplay
          district={this.props.district}
          dispatch={this.props.dispatch}
        />
        {this.props.district && (
          <TopDistric
            district={this.props.district.districtData}
            whatToDisplay={whatToDisplay}
          />
        )}

        {this.props.district && (
          <CovidInfoBox {...this.props.district.baseStateData.data} />
        )}
        {this.props.district && (
          <div className="chartStateDisplay">
            <ChartStateDisplay district={this.props.district} />
          </div>
        )}
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
