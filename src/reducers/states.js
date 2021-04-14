import { state_wise } from "../actions/index";

const initialStatereducer = {
  state: {},
};

export default function state(state = initialStatereducer, action) {
  switch (action.type) {
    case state_wise:
      return {
        ...state,
        state: action.data,
      };
    default:
      return {
        ...state,
      };
  }
}
