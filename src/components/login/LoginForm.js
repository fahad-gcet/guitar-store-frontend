import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import * as userActions from "../../actions/userActions";


class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      customerEmail: "",
      OTP: "",
      isOTPSent: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.isOTPSent) {
      this.props.actions.initiateAuth(this.state.customerEmail);
      this.setState(prevState => ({
        isOTPSent: true
      }));
    } else {
      this.props.actions.finalizeAuth(this.state.customerEmail);
    }
  }

  handleChange(event) {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }


  render() {
    const customerEmailInput = <input type="email"
                                      required
                                      autoComplete="off"
                                      value={this.state.customerEmail}
                                      className="form-control mb-4"
                                      placeholder="Customer Email"
                                      name="customerEmail"
                                      onChange={this.handleChange}/>;

    const OTPInput = <input type="text"
                            required
                            autoComplete="off"
                            value={this.state.OTP}
                            className="form-control mb-4"
                            placeholder="One Time Password"
                            name="OTP"
                            onChange={this.handleChange}/>;

    return (
      <div className="col-md-6 offset-3 loginForm">
        <form className="mb-2 text-center border border-light p-5"
              onSubmit={this.handleSubmit}>

          <p className="h4 mb-4">Sign in</p>

          {this.state.isOTPSent ? OTPInput : customerEmailInput}

          <button className="btn btn-info btn-block my-4" type="submit">
            {this.state.isOTPSent ? "Login" : "Send OTP"}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

LoginForm.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
