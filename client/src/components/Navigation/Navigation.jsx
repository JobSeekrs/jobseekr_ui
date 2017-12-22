import React from 'react';
import auth from '../../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
import './navigation.css';

class Navigation extends React.Component {
  
  logout() {
    //going to redirect to landingpage once it is finished
    auth.logout();
    localStorage.clear();
  }

  render() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li>
            <Link to="/home" href="/home">Dashboard</Link>
          </li>
          <li>
            <Link to="/search" href="/search">Search</Link>
          </li>
          <li>
            <Link to="/enter-a-job" href="/enter-a-job">Enter a Job</Link>
          </li>
          {/* <li>
            <Link to="/login" href="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup" href="/signup">Sign Up</Link>
          </li> */}
          <li>
            <Link to="/login" href="/login" onClick={this.logout}>Log Out</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
