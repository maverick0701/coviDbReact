import React, { Component } from "react";
import Options from "./options";
export default class GroupMultiple extends Component {
  render() {
    let { message, email, type } = this.props;
    // console.log(message);
    return (
      <div>
        <div className={"chat-bubble self-chat"}>
          {message.text}
          <div>
            <Options choices={message.items} type={type} />
          </div>
        </div>
      </div>
    );
  }
}
