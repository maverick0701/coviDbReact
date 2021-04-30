import axios from "axios";
import { ApiUrls } from "../helpers/Api";
import { toggleDashboardDisplay, getTweetData } from "./index";

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

export function getTweeterData() {
  return function (dispatch) {
    let urls = ApiUrls.get_tweet_data();
    let data;
    axios.get(urls).then((res) => {
      if (res) {
        data = res.data;
        return dispatch(setTweetData(data));
      }
    });
  };
}
