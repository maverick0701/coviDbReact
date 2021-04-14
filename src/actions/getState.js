import { ApiUrls } from "../helpers/Api";
import { state_wise } from "./index";
import axios from "axios";
export function statesData(res) {
  return {
    type: state_wise,
    data: res.data.data,
  };
}

export function getStateData() {
  return function (dispatch) {
    let state_wise = "state_wise";
    let urls = ApiUrls.state_wise();
    console.log(urls);
    axios
      .get(urls, {
        params: { apiName: state_wise },
      })
      .then((res) => {
        return dispatch(statesData(res));
      });
  };
}
