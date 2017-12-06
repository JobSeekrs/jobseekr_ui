import React from 'react';
import axios from 'axios';
import { Switch, Link, Route } from 'react-router-dom';
// import searchResults from './searchResults';
// import searchJobDetails from './searchJobDetails';

class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.clicked = this.clicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  clicked() {
    const context = this;
    console.log(this.state.value);
    axios.post('http://localhost:3100/github', {
      searched: context.state.value,
    }).then(function(response) {
      context.props.searchJobs(response.data);
    });
  }

  render() {
    return (
      <div className="container">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.clicked}>Click this to test github api</button>
        {/* <Switch>
          <Route path="/" component={searchResults} />
          <Route path="/jobdetails" component={searchJobDetails} />
        </Switch> */}
      </div>
    );
  }
}

export default search;
