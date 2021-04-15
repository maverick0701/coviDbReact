import React, { Component } from "react";

class table extends Component {
  render() {
    let { data } = this.props;
    let index; //= Object.keys(data);
    index = ["State", "Confirmed", "Recovered", "Deaths", "Active"];

    index.pop();

    return (
      <tr>
        {index.map((key) => (
          <td>{data[key]}</td>
        ))}
      </tr>
    );
  }
}

export default table;
