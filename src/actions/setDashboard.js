import axios from "axios";
import { ApiUrls } from "../helpers/Api";
import { toggleDashboardDisplay, getTweetData, getHospitalList } from "./index";

export function setDisplayDashboard(display) {
  // console.log(display);
  return {
    data: display,
    type: toggleDashboardDisplay,
  };
}

export function setTweetData(data) {
  return {
    data: data,
    type: getTweetData,
  };
}

export function setHospitalList(data) {
  return {
    data: data,
    type: getHospitalList,
  };
}

export function getTweeterData() {
  return function (dispatch) {
    let urls = ApiUrls.get_tweet_data();
    let data;
    axios
      .get(urls, {
        params: { location: "Delhi" },
      })
      .then((res) => {
        if (res) {
          data = res.data;
          return dispatch(setTweetData(data));
        }
      });
  };
}

export function getDataHospitalList() {
  return function (dispatch) {
    let urls = ApiUrls.get_hopital_list();

    axios
      .get(urls, {
        params: { location: "Delhi (NCT)" },
      })
      .then((res) => {
        if (res) {
          dispatch(setHospitalList(res.data.data));
        }
        // console.log(res.data.data);
      });
  };
}
