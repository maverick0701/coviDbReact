import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./table";
import Map from "./map";
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
      datas.map((data) => {
        console.log(data);
      });
      // console.log(datas);
      // Object.keys(this.props.state.state.data.finalDataArray[0]);
      keys = ["State", "Confirmed", "Recovered", "Deaths", "Active"];
      keys.pop();
    }
    return (
      <div>
        <div className="Screen">
          <div id="tableScreen">
            {this.props.state.state.data && (
              <div className="tableHeader">
                {keys.map((key) => (
                  <div className="tableContent">
                    <div className="tableContentHead" id={key}>
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div id="contentInTable">
              {this.props.state.state.data !== undefined &&
                datas.map((data) => <Table data={data} keys={keys} />)}
            </div>
          </div>
          <div>
            <Map />
          </div>
        </div>
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
{
  /* {datas.map((data) => (
                <Table data={data} />
              ))} */
}
