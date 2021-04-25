import { case_time_series, state_wise } from "../actions/index";

const initialStatereducer = {
  state: {},
  chartData: [],
};

export default function state(state = initialStatereducer, action) {
  switch (action.type) {
    case state_wise:
      return {
        ...state,
        state: action.data,
      };
    case case_time_series: {
      return {
        ...state,
        chartData: action.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
