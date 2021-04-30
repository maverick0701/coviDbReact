const API_ROOT = "http://localhost:8000";
function locationsMapedToApi(location) {
  if (location === "India") return `${API_ROOT}/getIndiaSeriesData`;
  else return `${API_ROOT}/getStateSeriesData`;
}
export const ApiUrls = {
  state_wise: () => `${API_ROOT}/states`,
  case_time_series: (location) => locationsMapedToApi(location),
  district_time_series: () => `${API_ROOT}/getDistrictData`,
  selected_state_base_num: () => `${API_ROOT}/getState`,
  get_tweet_data: () => `${API_ROOT}/getTweets`,
};

export function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
