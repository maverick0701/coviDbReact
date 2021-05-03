import { combineReducers } from "redux";
import state from "./states";
import district from "./district";
import dashboard from "./Dashboard";
import auth from "./auth";
export default combineReducers({
  state,
  district,
  dashboard,
  auth,
});
