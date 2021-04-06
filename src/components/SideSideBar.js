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
import ExpandedSideBar from "./ExpandedSideBar";
export default class SideSideBar extends Component {
  onHover = () => {
    let elem = document.getElementById("ExpandedSideBar");
    let pos = 0;

    if (elem.style.display !== "block") {
      elem.style.display = "block";
      function animate() {
        if (pos === 100) {
          clearInterval(id);
        } else {
          pos = pos + 10;
          elem.style.left = pos + "%";
        }
      }
      let id = setInterval(animate, 10);
    }
  };

  render() {
    return (
      <div className="Sidebar">
        <div className="Title">
          <FontAwesomeIcon icon={faDatabase} />
        </div>
        <div className="Links" onMouseOver={this.onHover}>
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
        <ExpandedSideBar />
      </div>
    );
  }
}
