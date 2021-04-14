import React, { Component } from "react";

class table extends Component {
  render() {
    let { data } = this.props;
    let index = Object.keys(data);
    console.log(index);

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
