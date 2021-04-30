import React, { Component } from "react";
import { TwitterBox } from "./index";
export default class DashboardBody extends Component {
  render() {
    let { tweets } = this.props;
    tweets = tweets.data;
    return (
      <div className="DashboardBodyRenderPart">
        {tweets.map((tweet) => (
          <TwitterBox {...tweet} />
        ))}
      </div>
    );
  }
}
