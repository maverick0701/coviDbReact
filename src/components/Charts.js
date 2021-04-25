import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { connect } from "react-redux";
class Charts extends Component {
  constructor(props) {
    super();
  }

  populateData(data) {
    let resp = [];
    let labels = [];
    data.map((elem) => {
      resp.push(elem["Total Confirmed"]);
      labels.push(elem["Date"].split(" ")[1]);
    });
    return { resp, labels };
  }
  render() {
    let data;
    let labels;
    let display = this.props.state.chartData.length;
    if (display !== 0) {
      let obj = this.populateData(this.props.state.chartData.data);
      data = obj.resp;
      labels = obj.labels;
    }

    return (
      <div className="Charts">
        <div className="chartBox">
          {display !== 0 && (
            <Line
              data={{
                labels: labels,
                datasets: [
                  {
                    label: "Total Confirmed",
                    data: data,
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                  },
                ],
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.state,
    chartData: state.chartData,
  };
}

const connectedChartsComponent = connect(mapStateToProps)(Charts);

export default connectedChartsComponent;
