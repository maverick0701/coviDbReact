import { toggleDashboardDisplay } from "./index";

export function setDisplayDashboard(display) {
  return {
    data: display,
    type: toggleDashboardDisplay,
  };
}
