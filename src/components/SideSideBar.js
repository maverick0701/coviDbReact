import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faPoll,
  faNewspaper,
  faGlobe,
  faHome,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
export default class SideSideBar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <div className="Title">
          <FontAwesomeIcon icon={faDatabase} />
        </div>
        <div className="Links">
          <div className="Element">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div className="Element">
            <FontAwesomeIcon icon={faAddressCard} />
          </div>
          <div className="Element">
            <FontAwesomeIcon icon={faPoll} />
          </div>
          <div className="Element">
            <FontAwesomeIcon icon={faNewspaper} />
          </div>
        </div>
        <div id="End">
          <div className="Element" id="Globe">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
        </div>
      </div>
    );
  }
}
