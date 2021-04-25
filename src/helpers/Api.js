const API_ROOT = "http://localhost:8000";

export const ApiUrls = {
  state_wise: () => `${API_ROOT}/states`,
  case_time_series: () => `${API_ROOT}/getChartsData`,
};
