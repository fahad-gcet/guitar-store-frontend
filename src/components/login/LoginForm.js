import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";


class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      customerID: "",
      OTP: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }


  render() {
    const customerIDInput = <input type="text"
                                   value={this.state.customerID}
                                   className="form-control mb-4"
                                   placeholder="Customer ID"
                                   name="customerID"
                                   onChange={this.handleChange}/>;

    const OTPInput = <input type="number"
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

          {this.props.isOTPSent ? OTPInput : customerIDInput}

          <button className="btn btn-info btn-block my-4" type="submit">Send
            OTP
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    isOTPSent: state.user.isOTPSent
  };
};

LoginForm.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isOTPSent: PropTypes.bool.isRequired
};


export default connect(mapStateToProps)(LoginForm);
