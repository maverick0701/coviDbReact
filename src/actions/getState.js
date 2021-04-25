import { ApiUrls } from "../helpers/Api";
import { case_time_series, state_wise } from "./index";
import axios from "axios";
export function statesData(res) {
  return {
    type: state_wise,
    data: res.data.data,
  };
}

export function getStateData() {
  return function (dispatch) {
    let urls = ApiUrls.state_wise();
    axios
      .get(urls, {
        params: { apiName: state_wise },
      })
      .then((res) => {
        return dispatch(statesData(res));
      });
  };
}

export function getChartsData(res) {
  return {
    type: case_time_series,
    data: res,
  };
}

export function getCaseTimeSeries(location) {
  return function (dispatch) {
    let urls;
    urls = ApiUrls.case_time_series(location);
    let data;
    axios
      .get(urls, {
        params: {
          apiName: case_time_series,
          key: "Total Confirmed,Date,Date_YMD,Daily Recovered,Total Recovered",
        },
      })
      .then((res) => {
        data = res.data.data;
        return dispatch(getChartsData(data));
      });
  };
}
