import axios from "axios";
import qs from "qs";
import { ApiUrls } from "../helpers/Api";
import { beginLogin, loginSuccess, loginFailed } from "./index";

export function beginLoginFunction() {
  return {
    type: beginLogin,
  };
}

export function loginFailedFunction(error) {
  return {
    type: loginFailed,
    error: error,
  };
}

export function startAuthFunction(data) {
  return function (dispatch) {
    dispatch(beginLoginFunction());
    let urls;
    urls = ApiUrls.auth();
    let headers = { "content-type": "application/x-www-form-urlencoded" };
    // console.log(data.email);
    axios
      .post(urls, qs.stringify(data), {
        headers: headers,
      })
      .then((data) => {
        console.log(data.data.data);
      });
  };
}
