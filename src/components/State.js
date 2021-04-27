import React, { Component } from "react";
import { connect } from "react-redux";
import { getDistrictWiseData, getStateTrends } from "../actions/getDistrict";
import { ApiUrls } from "../helpers/Api";
class State extends Component {
  componentDidMount() {
    let urls = ApiUrls.district_time_series();
    const { params } = this.props.match;
    let location = params.location;
    console.log(location);
    this.props.dispatch(getDistrictWiseData(location));
    this.props.dispatch(getStateTrends(location));
  }
  render() {
    return <div>State</div>;
  }
}

function mapStateToProps(state) {
  return {
    state: state.state,
  };
}

const connectedStateComponent = connect(mapStateToProps)(State);
export default connectedStateComponent;
