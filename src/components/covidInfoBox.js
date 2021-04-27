import React, { Component } from "react";

export default class covidInfoBox extends Component {
  render() {
    return (
      <div className="CovidInfo">
        <div className="CovidInfoBox">
          <div className="CovidInfoBoxHeader">
            <div className="CovidInfoBoxTitle">Confirmed Per Million</div>
            <div className="CovidInfoBoxNumber">41,576.2</div>
            <div className="CovidInfoBoxTitle">India has 13,495.9 CPM</div>
          </div>
          <div className="CovidInfoBoxBody">
            41,576 out of every 10 lakh people in Kerala have tested positive
            for the virus.
          </div>
        </div>
        <div className="CovidInfoBox box2">
          <div className="CovidInfoBoxHeader">
            <div className="CovidInfoBoxTitle">Confirmed Per Million</div>
            <div className="CovidInfoBoxNumber box2Num">41,576.2</div>
            <div className="CovidInfoBoxTitle box2Title">
              India has 13,495.9 CPM
            </div>
          </div>
          <div className="CovidInfoBoxBody box2Body">
            41,576 out of every 10 lakh people in Kerala have tested positive
            for the virus.
          </div>
        </div>
        <div className="CovidInfoBox box3">
          <div className="CovidInfoBoxHeader">
            <div className="CovidInfoBoxTitle">Confirmed Per Million</div>
            <div className="CovidInfoBoxNumber box3Num">41,576.2</div>
            <div className="CovidInfoBoxTitle box3Title">
              India has 13,495.9 CPM
            </div>
          </div>
          <div className="CovidInfoBoxBody box3Body">
            41,576 out of every 10 lakh people in Kerala have tested positive
            for the virus.
          </div>
        </div>
        <div className="CovidInfoBox box4">
          <div className="CovidInfoBoxHeader">
            <div className="CovidInfoBoxTitle">Confirmed Per Million</div>
            <div className="CovidInfoBoxNumber ">41,576.2</div>
            <div className="CovidInfoBoxTitle ">India has 13,495.9 CPM</div>
          </div>
          <div className="CovidInfoBoxBody ">
            41,576 out of every 10 lakh people in Kerala have tested positive
            for the virus.
          </div>
        </div>
      </div>
    );
  }
}
