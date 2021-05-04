import React, { Component } from "react";
import io from "socket.io-client";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../chat.css";
class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [], // {content: 'some message', self: true}
      typedMessage: "",
      chatRoom: "",
    };
    this.socket = io.connect("http://localhost:5000");
  }
  componentDidUpdate() {
    let { email, id } = this.props.auth.user;
    if (email) {
      this.connectionHandler(email, id);
    }
  }
  connectionHandler = (email, userid) => {
    if (email) {
      let self = this;
      this.socket.on("connect", function () {
        self.socket.emit("joinRoom", {
          emial: email,
          chatRoom: "ChatBot" + userid,
        });
        self.socket.on("userJoined", function (data) {
          let messages = self.state.messages;

          let newData = { content: data.newData };
          messages.push(newData);
          self.setState({
            messages: messages,
            chatRoom: data.chatRoom,
          });
        });
        self.socket.on("recieveMessage", function (data) {
          let message = data.data;
          let messages = self.state.messages;
          messages.push(message);
          self.setState({
            messages: messages,
          });
        });
      });
    }
  };

  handleSubmit = () => {
    let data = {};
    let { user } = this.props.auth;
    data.content = this.state.typedMessage;
    data.email = user.email;
    if (data.email) {
      this.socket.emit("sendMessage", {
        data: data,
        chatRoom: this.state.chatRoom,
      });
      this.setState({
        typedMessage: "",
      });
    }
  };
  render() {
    const { typedMessage, messages } = this.state;
    let { email } = this.props.auth.user;

    return (
      <div>
        <div className="chat-container">
          <div className="chat-header">Chat</div>
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                className={
                  messages.email === email
                    ? "chat-bubble self-chat"
                    : "chat-bubble other-chat"
                }
              >
                {message.content}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={typedMessage}
              onChange={(e) => this.setState({ typedMessage: e.target.value })}
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

const connectedChatComponent = connect(mapStateToProps)(Chat);
export default connectedChatComponent;
