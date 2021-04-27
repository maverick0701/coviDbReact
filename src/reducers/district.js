import { district_wise_data } from "../actions";

const initialDistrictreducer = {
  districtData: [],
  location: "",
};

export default function district(state = initialDistrictreducer, action) {
  switch (action.type) {
    case district_wise_data: {
      return {
        ...state,
        districtData: action.data,
        location: action.location,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
