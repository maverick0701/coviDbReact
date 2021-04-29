import React, { Component } from "react";
import { Search, DashBoardToggle } from "./index";
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="headerSearch">
          <Search />
          <div className="DashboardBodyBox">
            <DashBoardToggle />
            {/* <header className="DashboardHeader">
              <div className="DashboardLocation stateName">Delhi</div>
            </header> */}
          </div>
        </div>
      </div>
    );
  }
}
