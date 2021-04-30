import { toggleDashboardDisplay } from "./index";

export function setDisplayDashboard(display) {
  // console.log(display);
  return {
    data: display,
    type: toggleDashboardDisplay,
  };
}
