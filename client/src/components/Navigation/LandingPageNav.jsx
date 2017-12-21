import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageNav = (props) => (
  <div>
    <Link to="/login" href="/login">Login</Link>
    <Link to="/signup" href="/signup">Sign Up</Link>
  </div>
);

export default LandingPageNav;
