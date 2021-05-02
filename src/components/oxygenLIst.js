import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export default class OxygenLIst extends Component {
  render() {
    let { oxyList } = this.props;
    return (
      <div>
        <div className="DashboardBodyRenderPart">
          {oxyList.map((elem) => (
            <div className="tweetBox">
              <div className="TweetBoxHeader stateName ">
                {elem.name}
                <div>{elem.district}</div>
              </div>

              <div className="TweetBoxBody comment">
                {elem.description}
                <div className="footerHos">
                  <div>
                    <FontAwesomeIcon className="phone" icon={faPhone} />
                    <span> </span>
                    <span> </span>
                    {/* <FontAwesomeIcon className="phone" icon={faPhone} /> */}
                    <span> </span>
                    <span> </span>
                    {elem.phone1}
                  </div>
                  <div>Verified on : {elem.lastVerifiedOn.split("T")[0]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
