import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setSignUp, setsucessFalse } from "../actions/signUp";
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      age: 0,
      gender: "",
      name: "",
    };
  }
  changeEmailValue = (e) => {
    // e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  };
  changeNameValue = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  changePasswodValue = (e) => {
    // e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  };
  changeConfimPasswodValue = (e) => {
    // e.preventDefault();
    this.setState({
      confirmPassword: e.target.value,
    });
  };
  handleGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  changeAgeValue = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(setSignUp(this.state));

    // this.props.dispatch(startAuthFunction(this.state));
    // console.log(this.state);
  };
  componentWillUnmount() {
    this.props.dispatch(setsucessFalse());
  }

  render() {
    let { inProgress, message, success } = this.props.signUp;
    let { isLoggedIn } = this.props.auth;

    if (isLoggedIn) {
      return <Redirect to="/Dashboard" />;
    }
    if (success) {
      return <Redirect to="/Login" />;
    }
    return (
      <div className="container">
        <div className="outer-wrapper">
          <div className="form-head">Sign Up</div>
          <div className="form-content">
            <form>
              {message !== "" && <div className="error">{message}</div>}
              <div className="form-inp">
                <input
                  type="email"
                  className="eml"
                  placeholder="Email"
                  onChange={this.changeEmailValue}
                />
              </div>
              <div className="form-inp">
                <input
                  type="text"
                  className="eml"
                  placeholder="Name"
                  onChange={this.changeNameValue}
                />
              </div>
              <div className="form-inp" id="pass">
                <input
                  type="password"
                  placeholder="Password"
                  className="eml"
                  onChange={this.changePasswodValue}
                />
              </div>
              <div className="form-inp" id="pass">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="eml"
                  onChange={this.changeConfimPasswodValue}
                />
              </div>
              <div className="form-inp" id="pass">
                <input
                  type="number"
                  placeholder="How Young Are You"
                  className="eml"
                  onChange={this.changeAgeValue}
                />
              </div>
              <div className="form-inp" id="pass">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onClick={this.handleGender}
                />{" "}
                <span className="radioSignUp">Male</span>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onClick={this.handleGender}
                />{" "}
                <span className="radioSignUp">Female</span>
              </div>
              <Link to="/Login">
                <span className="SignInlink">Back To Login</span>
              </Link>
              <div className="submit-btn">
                {inProgress == false && (
                  <button
                    type="submit"
                    className="submit-btn1"
                    onClick={this.handleSubmitForm}
                  >
                    Proceed
                  </button>
                )}
                {inProgress && (
                  <button type="submit" className="submit-btn1">
                    in Progress
                  </button>
                )}
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
    signUp: state.signUp,
  };
}

const connectedSignUpComponent = connect(mapStateToProps)(SignUp);
export default connectedSignUpComponent;