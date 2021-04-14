import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./table";
import { getStateData } from "../actions/getState";
class Screen extends Component {
  componentDidMount() {
    this.props.dispatch(getStateData());
  }

  render() {
    let keys;
    let datas;
    if (this.props.state.state.data) {
      datas = this.props.state.state.data.finalDataArray;
      console.log(datas);
      keys = Object.keys(this.props.state.state.data.finalDataArray[0]);
      keys.pop();
    }
    return (
      <div>
        {this.props.state.state.data && (
          <div className="Screen">
            <table className="styled-table">
              <tr>
                {keys.map((key) => (
                  <th>{key}</th>
                ))}
              </tr>
              {datas.map((data) => (
                <Table data={data} />
              ))}
            </table>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.state,
  };
}

const connectedScreenComponent = connect(mapStateToProps)(Screen);

export default connectedScreenComponent;
