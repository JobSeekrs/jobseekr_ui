import React from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';
import Ripple from './Ripple.svg';
import SearchResults from '../../../../containers/Search/searchResultsContainer';
import SearchJobDetails from '../../../../containers/Search/searchJobDetailPropsContainer';
import auth from '../../../../helpers/auth';

class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      toggle: false,
      redirect: false,
      error: false,
    };
    this.clicked = this.clicked.bind(this);
    this.saveOrDeleteJob = this.saveOrDeleteJob.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyPressDetails = this.handleKeyPressDetails.bind(this);
  }

  componentWillUnmount() {
    console.log('UNMOUNT HITTING')
    this.props.searchJobs([]);
    this.props.saveOrDeleteSearchedJobs({checked: 'Refresh'}, []);
  }
 
  handleKeyPressDetails(e) {
    this.setState({
      redirect: true,
    });
    if (e.key === 'Enter') {
      this.clicked();
    }
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.clicked();
    }
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  saveOrDeleteJob (job, checked, checkbox) {
    job.checkbox = checkbox;
    job.checked = checked;
    const savedJobs = {
      jobs: this.props.savedSearchedJobs,
    };
    this.props.saveOrDeleteSearchedJobs(job, savedJobs.jobs);
  }

  clicked() {
    const context = this;
    if (this.state.redirect === false) {
      this.setState({
        toggle: true,
      });
      axios.post(`${auth.serverUrl}/github`, {
        searched: context.state.value,
      }).then(function(response) {
        response.data.listings.listing.map((job, i) => {
          job.checked = false;
          job.checkbox = 0;
        })
        context.props.searchJobs(response.data);
        if (context.props.searchResults.length === 0) {
          context.setState({
            toggle: false,
            value: '',
            error: true,
          });
        } else {
          context.setState({
            toggle: false,
            value: '',
            error: false,
          });
        }
      });
    } else {
      this.setState({
        toggle: true,
      });
      axios.post(`${auth.serverUrl}/github`, {
        searched: context.state.value,
      }).then(function(response) {
        context.props.searchJobs(response.data);
        if (context.props.searchResults.length === 0) {
          context.setState({
            toggle: false,
            value: '',
            redirect: false,
            error: true
          });
        } else {
          context.setState({
            toggle: false,
            value: '',
            redirect: false,
            error: false
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="container text-center">
        <div>
          {this.state.toggle === false ?
          (
            <Switch>
              <Route exact path="/search" render={(props) => <SearchResults {...props} error = {this.state.error} saveOrDeleteJob={this.saveOrDeleteJob} handleKeyPress={this.handleKeyPress} handleChange={this.handleChange} value={this.state.value} clicked={this.clicked}/>} />
              <Route exact path="/search/details" render={(props) => <SearchJobDetails {...props} saveOrDeleteJob={this.saveOrDeleteJob} handleKeyPressDetails={this.handleKeyPressDetails} handleChange={this.handleChange} value={this.state.value} clicked={this.clicked}/>} />
            </Switch>
          ) :
            <div className="center">
              <Ripple />
              {this.state.redirect === true ? (<Redirect to="/search/" />) : null}
            </div>
          }
        </div>
      </div>
    );
  }
}


export default search;