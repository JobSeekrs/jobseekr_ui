import React from 'react';
import axios from 'axios';
import SearchResultsEntry from '../../../../containers/Search/searchJobDetailActionContainer';

class searchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saveJobsButton: false,
    }
    this.saveOrDeleteJob = this.saveOrDeleteJob.bind(this);
    this.saveJobs = this.saveJobs.bind(this);
  }

  saveOrDeleteJob(job, checked, checkbox) {
    if (this.props.savedSearchedJobs.length === 0) {
      this.setState({
        saveJobsButton: true,
      })
    };
    job.checkbox = checkbox;
    job.checked = checked;
    const savedJobs = {
      jobs: this.props.savedSearchedJobs,
    };
    this.props.saveOrDeleteSearchedJobs(job, savedJobs);
  }

  saveJobs() {
    const context = this;
    axios.post('http://localhost:3002/company', {
      jobs: context.props.savedSearchedJobs
    }).then(function(response) {
      console.log('this is respnose', response);
      // axios.post('http://localhost:3002/job', {
      //   jobs: context.props.savedSearchedJobs
      // }).then(function(response) {
      //   console.log('this is response 2', response);
      // })
    })
    console.log('saved jobs', this.props.savedSearchedJobs);
  };

  render() {
    return (
      <div>
          {this.props.savedSearchedJobs.length === 0 ? (
            <div>
              <input type="text" value={this.props.value} onKeyPress={this.props.handleKeyPress} onChange={this.props.handleChange} />
              <button onClick={this.props.clicked}>Click this to test github api</button>
              {console.log(this.props.searchResults)}
              {this.props.searchResults.map((job, i) => (
                <SearchResultsEntry job={job} key={i} saveOrDeleteJob={this.saveOrDeleteJob}/>
              ))} 
            </div>
          ) : <div>
                <input type="text" value={this.props.value} onKeyPress={this.props.handleKeyPress} onChange={this.props.handleChange} />
                <button onClick={this.props.clicked}>Click this to test github api</button>
                <button onClick={this.saveJobs}>Save Jobs</button>
                {this.props.searchResults.map((job, i) => (
                  <SearchResultsEntry job={job} key={i} saveOrDeleteJob={this.saveOrDeleteJob}/>
                ))}
            </div>
          }
      </div>
    )
  }
}


export default searchResults;

