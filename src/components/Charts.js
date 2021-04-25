import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { ChartDisplay } from "./index";
class Charts extends Component {
  constructor(props) {
    super();
  }

  populateData(data) {
    let totalConfirmed = [];
    let dailyRecovered = [];
    let labels = [];
    let totalRecovered = [];
    let title = ["Total Confirmed", "Daily Recovered", "Total Recovered"];
    data.map((elem) => {
      totalConfirmed.push(elem["Total Confirmed"]);
      dailyRecovered.push(elem["Daily Recovered"]);
      totalRecovered.push(elem["Total Recovered"]);
      labels.push(elem["Date"].split(" ")[1]);
    });
    return { totalConfirmed, labels, dailyRecovered, title, totalRecovered };
  }
  render() {
    let data = {};
    let labels;
    let title;
    let display = this.props.state.chartData.length;
    if (display !== 0) {
      let obj = this.populateData(this.props.state.chartData.data);
      data.totalConfirmed = obj.totalConfirmed;
      data.dailyRecovered = obj.dailyRecovered;
      data.totalRecovered = obj.dailyRecovered;
      title = obj.title;
      labels = obj.labels;
      console.log(data.dailyRecovered);
    }

    return (
      <div className="Charts">
        {Object.keys(data).map((key, index) => (
          <div className="chartBox">
            {display !== 0 && (
              <ChartDisplay
                data={data[key]}
                labels={labels}
                title={title[index]}
              />
            )}
          </div>
        ))}
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

// options: {
//   scales: {
//     x: {
//       type: "time",
//       time: {
//         displayFormats: {
//           quarter: "MMM YYYY",
//         },
//       },
//     },
//   },
// },
