import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
export default class Charts extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
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
        data.map((elem) => {
          resp.push(elem["Total Confirmed"]);
        });
        this.setState({
          data: resp,
        });
      });
  }
  render() {
    // const labels = Utils.months({ count: 7 });
    const data = this.state.data;
    console.log(data, "hihi");
    return (
      <div className="Charts">
        <Line
          data={{
            labels: ["jam", "fev", "march", "april", "may", "june"],
            datasets: [
              {
                label: "My First Dataset",
                data: data,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          }}
        />
      </div>
    );
  }
}
