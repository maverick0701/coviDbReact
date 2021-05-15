import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faPoll,
  faSignOutAlt,
  faGlobe,
  faHome,
  faDatabase,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import ExpandedSideBar from "./ExpandedSideBar";
import { logoutFunction, setAuthenticatedUserFunction } from "../actions/auth";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
class SideSideBar extends Component {
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
  signMeOut = (e) => {
    e.preventDefault();
    console.log("sign out");
    this.props.dispatch(logoutFunction());
    return <Redirect to="/Login" />;
  };
  render() {
    let { isLoggedIn } = this.props.auth;
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
            <Link to="/statewise" id="LoginLink">
              <FontAwesomeIcon icon={faPoll} />
            </Link>
          </div>
          {isLoggedIn && (
            <div className="Element" onClick={this.signMeOut}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
          )}
          {!isLoggedIn && (
            <div className="Element">
              <Link to="/Login" id="LoginLink">
                <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
            </div>
          )}
        </div>
        <div id="End">
          <div className="Element" id="Globe">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
        </div>
        <ExpandedSideBar isLoggedIn={isLoggedIn} signMeOut={this.signMeOut} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
const connectedSideBarComponent = connect(mapStateToProps)(SideSideBar);
export default connectedSideBarComponent;

//Thiis is bar chart
