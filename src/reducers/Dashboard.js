import {
  toggleDashboardDisplay,
  getTweetData,
  getHospitalList,
  getOxyList,
} from "../actions";

const intialDashboardReducer = {
  display: "",
  tweets: [],
  location: "Delhi",
  hospitalList: [],
  oxyList: [],
};

export default function dashboard(state = intialDashboardReducer, action) {
  switch (action.type) {
    case toggleDashboardDisplay: {
      return {
        ...state,
        display: action.data,
      };
    }
    case getTweetData: {
      return {
        ...state,
        tweets: action.data,
      };
    }
    case getHospitalList: {
      return {
        ...state,
        hospitalList: action.data,
      };
    }
    case getOxyList: {
      return {
        ...state,
        oxyList: action.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
