import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Chat extends Component {
  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />;
    }
    return <div>Chat</div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

const connectedChatComponent = connect(mapStateToProps)(Chat);
export default connectedChatComponent;
