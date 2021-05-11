import React, { Component } from "react";

export default class triage extends Component {
  render() {
    let { triage } = this.props;
    let { description, label, triage_level } = triage.data;
    console.log(triage);
    return (
      <div>
        <div className={"chat-bubble self-chat"}>
          <div>Descrption: </div>
          <div>{description}</div>
          <div>Actions You Should Take: </div>
          <div>{label}</div>
          <div>Triage Level :</div>
          <div>{triage_level}</div>
        </div>
      </div>
    );
  }
}