import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
export default class Charts extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      labels: [],
    };
  }
  componentDidMount() {
    let data;
    let case_time_series = "case_time_series";
    axios
      .get("http://localhost:8000/getChartsData", {
        params: {
          apiName: case_time_series,
          key: "Total Confirmed,Date,Date_YMD ",
        },
      })
      .then((res) => {
        data = res.data.data.data;
        // console.log(data);
        let resp = [];
        let labels = [];
        data.map((elem) => {
          resp.push(elem["Total Confirmed"]);
          labels.push(elem["Date"].split(" ")[1]);
        });
        this.setState({
          data: resp,
          labels,
        });
      });
  }
  render() {
    // const labels = Utils.months({ count: 7 });
    const data = this.state.data;
    const labels = this.state.labels;
    // console.log(data, "hihi");
    return (
      <div className="Charts">
        <div className="chartBox">
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
            }}
          />
        </div>
      </div>
    );
  }
}
