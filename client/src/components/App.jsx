import React from 'react';
import Navigation from './Navigation/Navigation';
import './Navigation/navigation.css';
import { Switch, Route } from 'react-router-dom';
import manual from './HomePage/Jobs/manual';
import search from './HomePage/Jobs/search';
import home from './HomePage/DashBoard/index';


class App extends React.Component {

  constructor(props) {
         super(props);
         this.toggleClass = this.toggleClass.bind(this);
         this.state = {
             active: false,
         };
     }

     toggleClass() {
      var currentState = this.state.active;
      this.setState({ active: !currentState });
     };

  render() {
    return (
      <div>
        <div id="wrapper" className={ this.state.active ? 'toggled': 'notToggled' }>
        <Navigation/>
          <div id="page-content-wrapper">

                <div className="container-fluid">
                      <button className="btn btn-secondary" id="menu-toggle"
                         onClick={this.toggleClass}>
                        Toggle Menu
                      </button>
                      <h3>Your Name</h3>
                      <Switch>
                          <Route path='/home' component={home} />
                          <Route path='/enter-a-job' component={manual} />
                          <Route path='/search' component={search} />
                      </Switch>
                </div>
          </div>
      </div>
    );
  }
}




export default App;

