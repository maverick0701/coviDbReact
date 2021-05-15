import { combineReducers } from "redux";
import state from "./states";
import district from "./district";
import dashboard from "./Dashboard";
import auth from "./auth";
import signUp from "./signUp";
export default combineReducers({
  state,
  district,
  dashboard,
  auth,
  signUp,
});

//this is storage
