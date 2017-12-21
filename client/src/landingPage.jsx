import React from 'react';
import LogIn from './components/Auth/login';
import SignUp from './components/Auth/signup';
import LandingPageNav from './components/Navigation/LandingPageNav';
import App from './components/App';
import { Switch, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : true,
    }
  }

  render() {
    return (
      <div>
        {this.state.loggedIn === false ? (
          <div>LandingPage</div>
        ) :
          <App />
        }
      </div>
    )
  }
};

// function mapStateToProps(state) {
//   loggedIn: state.loggedIn
// };


// export default connect(mapStateToProps)(LandingPage);

export default LandingPage;