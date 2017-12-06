import React from 'react';
import axios from 'axios';
import { Switch, Link, Route } from 'react-router-dom';
import searchResults from '../../../containers/searchResultsContainer';
import searchJobDetails from '../../../containers/searchJobDetailPropsContainer';

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
        <Switch>
          <Route exact path="/search" component={searchResults} />
          <Route exact path="/search/details" component={searchJobDetails} />
        </Switch>
      </div>
    );
  }
}

export default search;
