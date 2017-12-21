import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
// import api from '../../helper/apiAuth';
import auth from '../../helpers/auth';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      // emailLogin: '',
      // password: '',
      loginSucceeded: false,
    };
    this.onChangeLoginForm = this.onChangeLoginForm.bind(this);
    this.onSubmitLoginForm = this.onSubmitLoginForm.bind(this);
  }

  componentWillMount() {
    auth.logout();
  }

  onChangeLoginForm(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitLoginForm(e) {
    e.preventDefault();
    if (this.state.emailLogin && this.state.password) {
      console.log('about to log in', auth.serverUrl)
      axios({
        method: 'post',
        url: `${auth.serverUrl}/login`,
        auth: {
          username: this.state.emailLogin,
          password: this.state.password,
        },
      })
      .then(response => {
        console.log(response.status)
        console.log(response.data)
        if (response.status === 200) {
          auth.login(response.data);
          this.setState({ loginSucceeded: true });
        } else {
          alert('Please try again');
        }
      })
      .catch(error => {
        console.log('in catch', error)
        alert('Login error', error);
      });
    }
  }
  render() {
    if (this.state.loginSucceeded) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Log In</h2>
            <form 
              onSubmit={this.onSubmitLoginForm}
              id="loginForm"
              name="loginForm"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="emailLogin"
                  name="emailLogin"
                  placeholder="Email Address"
                  onChange={this.onChangeLoginForm}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChangeLoginForm}
                />
              </div>
              <div className="form-group">
                <button
                  type="Log In"
                  id="btn-login"
                  name="btn-login"
                  className="btn btn-primary "
                >Log In
                </button>
                <Link
                  to="/signup"
                  href="/signup"
                  id="btn-login"
                  name="btn-login"
                  className="btn btn-secondary"
                >Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginForm;
