import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      emailLogin: '',
      password: '',
      verifyPassword: '',
      signupWasSuccess: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.signupFormSubmit = this.signupFormSubmit.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }


  signupFormSubmit(e) {
    console.log('in', this.state)
    e.preventDefault();
    if (this.state.firstName && this.state.lastName
        && this.state.emailLogin && this.state.password.length >= 8
        && this.state.password === this.state.verifyPassword) {
      console.log('ready to posr')  
      const server = 'http://localhost:3002';
      axios.post(`${server}/signup`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailLogin: this.state.emailLogin,
        password: this.state.password
      }).then(response => {
        if(response.status === 200) {
          this.setState({ signupWasSuccess : true });
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
    if (this.state.signupWasSuccess) {
      return <Redirect to="/login" />;
    } else {    
      return (
          <div className="container">
            <div className='row justify-content-center'>
              <div className="col-md-6">
              <h2>Sign Up</h2>
                <form 
                  onSubmit={this.signupFormSubmit}
                  id="signupForm"
                  name="signupForm"
                >
                  <div className='form-group'>
                    <label>First Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName"
                      name="firstName"  
                      placeholder='First Name'
                      onChange={this.handleUserInput}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Last Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName"
                      name="lastName"  
                      placeholder='Last Name'
                      onChange={this.handleUserInput}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Email Address (this will be your Login ID)</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="emailLogin"
                      name="emailLogin"  
                      placeholder='Email Address'
                      onChange={this.handleUserInput}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Choose a Password (8 characters minimum)</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password"
                      name="password" 
                      placeholder='Password' 
                      onChange={this.handleUserInput}
                    />
                  </div>
                  <div className='form-group'>
                    <label>Verify your Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="verifyPassword"
                      name="verifyPassword" 
                      placeholder='Password' 
                      onChange={this.handleUserInput}
                    />
                  </div>
                  <div className="form-group">
                    <Link to="/login" href="/login" className="btn btn-primary">Login</Link>
                    <button 
                      type="Submit"
                      className="btn btn-secondary btn-sign-up"
                    >Sign Up
                    </button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      );
    }
  }   
}

export default Signup;





