import { toggleDashboardDisplay } from "../actions";

const intialDashboardReducer = {
  display: "",
};

export default function dashboard(state = intialDashboardReducer, action) {
  switch (action.type) {
    case toggleDashboardDisplay: {
      return {
        ...state,
        display: action.data,
      };
    }

    default:
      return {
        ...state,
      };
  }
}
