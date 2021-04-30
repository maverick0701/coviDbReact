import { toggleDashboardDisplay, getTweetData } from "../actions";

const intialDashboardReducer = {
  display: "",
  tweets: [],
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
    default:
      return {
        ...state,
      };
  }
}
