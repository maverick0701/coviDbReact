const API_ROOT = "http://localhost:8000";
let locationsMapedToApi = {
  India: `${API_ROOT}/getChartsData`,
};
export const ApiUrls = {
  state_wise: () => `${API_ROOT}/states`,
  case_time_series: (location) => locationsMapedToApi[location],
};
