import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import manual from './HomePage/Jobs/manual/Manual';
import search from '../containers/searchContainer';
import Home from './HomePage/DashBoard/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div>
        <div id="wrapper" className={this.state.active ? 'toggled' : 'notToggled'}>
          <Navigation />
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <div className="row no-gutters">
                <div className="col-md-3">
                  <button
                    className="btn btn-secondary"
                    id="menu-toggle"
                    onClick={this.toggleClass}
                  >
                  Toggle Menu
                  </button>
                </div>
                <div className="offset-md-2 col-md-7">
                  <h3>Your Name</h3>
                </div>
              </div>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/enter-a-job" component={manual} />
                <Route path="/search" component={search} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;

