import React, { Component } from "react";
import { startAuthFunction } from "../actions/auth";
import { connect } from "react-redux";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  changeEmailValue = (e) => {
    // e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  };
  changePasswodValue = (e) => {
    // e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  };
  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(startAuthFunction(this.state));
    // console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="outer-wrapper">
          <div className="form-head">Login</div>
          <div className="form-content">
            <form>
              <div className="form-inp">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={this.changeEmailValue}
                />
              </div>
              <div className="form-inp" id="pass">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.changePasswodValue}
                />
              </div>
              <div className="submit-btn">
                <button
                  type="submit"
                  className="submit-btn1"
                  onClick={this.handleSubmitForm}
                >
                  Proceed
                </button>
              </div>
            </form>
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

const connectedLoginComponent = connect(mapStateToProps)(Login);
export default connectedLoginComponent;
