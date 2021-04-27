import {
  district_wise_data,
  selected_state_trends,
  selected_state_base_num,
} from "../actions";

const initialDistrictreducer = {
  districtData: [],
  location: "",
  selectedStateData: [],
  baseStateData: {},
};

export default function district(state = initialDistrictreducer, action) {
  switch (action.type) {
    case district_wise_data: {
      return {
        ...state,
        districtData: action.data.data,
        location: action.location,
      };
    }
    case selected_state_trends: {
      return {
        ...state,
        selectedStateData: action.data.data,
      };
    }
    case selected_state_base_num: {
      return {
        ...state,
        baseStateData: action.data,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
