import { combineReducers } from "redux";
import state from "./states";
import district from "./district";
import dashboard from "./Dashboard";
export default combineReducers({
  state,
  district,
  dashboard,
});
