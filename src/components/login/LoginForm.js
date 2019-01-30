import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      customerID: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({customerID: event.target.value});
  }


  render() {
    return (
      <div className="col-md-6 offset-3 loginForm">
        <form className="mb-2 text-center border border-light p-5"
              onSubmit={this.handleSubmit}>

          <p className="h4 mb-4">Sign in</p>

          <input type="text" required value={this.state.customerID}
                 className="form-control mb-4" placeholder="Customer ID"
                 onChange={this.handleChange}/>

          <button className="btn btn-info btn-block my-4" type="submit">Send
            OTP
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
