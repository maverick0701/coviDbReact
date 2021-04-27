import { ApiUrls, Capitalize } from "../helpers/Api";
import { district_wise_data, state_time_series } from "./index";
import axios from "axios";

export function districtData(data, location) {
  return {
    type: district_wise_data,
    data: data,
    location,
  };
}

export function getDistrictWiseData(location) {
  return function (dispatch) {
    let urls = ApiUrls.district_time_series();

    axios
      .get(urls, {
        params: {
          apiName: district_wise_data,
          location: location,
        },
      })
      .then((res) => {
        return dispatch(districtData(res.data, location));
      });
  };
}

export function getStateTrends(location) {
  return function (dispatch) {
    let urls = ApiUrls.case_time_series();
    let data;
    axios
      .get(urls, {
        params: {
          apiName: state_time_series,
          location: location,
        },
      })
      .then((res) => {
        data = res.data;
        console.log(data);
      });
  };
}
