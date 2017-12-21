import axios from 'axios';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import auth from '../../helpers/auth';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailLogin: '',
      password: '',
      verifyPassword: '',
      signupSucceeded: false,
    };
    this.onChangeSignupForm = this.onChangeSignupForm.bind(this);
    this.onSubmitSignupForm = this.onSubmitSignupForm.bind(this);
  }
  onChangeSignupForm(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmitSignupForm(e) {
    console.log('ready to sign up')
    e.preventDefault();
    if (this.state.firstName && this.state.lastName
        && this.state.emailLogin && this.state.password.length >= 8
        && this.state.password === this.state.verifyPassword) {
      axios.post(`${auth.serverUrl}/signup`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailLogin: this.state.emailLogin,
        password: this.state.password,
      }).then((response) => {
        if (response.status === 200) {
          this.setState({ signupSucceeded: true });
          alert('Thanks for sigining up! Please log in')
        } else {
          alert('Please try again');
        }
      });
    } else {
      alert('All fields required and passwords mutch match');
    }
  }
  render() {
    if (this.state.signupSucceeded) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Sign Up</h2>
            <form
              onSubmit={this.onSubmitSignupForm}
              id="signupForm"
              name="signupForm"
            >
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstname}
                  onChange={this.onChangeSignupForm}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.onChangeSignupForm}
                />
              </div>
              <div className="form-group">
                <label>Email Address (your Login ID)</label>
                <input
                  type="text"
                  className="form-control"
                  id="emailLogin"
                  name="emailLogin"
                  placeholder="Email Address"
                  value={this.state.emailLogin} 
                  onChange={this.onChangeSignupForm}
                />
              </div>
              <div className="form-group">
                <label>Password (8 characters minimum)</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Choose a Password"
                  value={this.state.password}
                  onChange={this.onChangeSignupForm}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="verifyPassword"
                  name="verifyPassword"
                  placeholder="Verify Password"
                  value={this.state.verifyPassword}
                  onChange={this.onChangeSignupForm}
                />
              </div>
              <div className="form-group">
                <button
                  type="Submit"
                  id="btn-signup"
                  name="btn-signup"
                  className="btn btn-primary "
                >Sign Up
                </button>
                <Link
                  to="/login"
                  href="/login"
                  id="btn-login"
                  name="btn-login"
                  className="btn btn-secondary"
                >Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;




