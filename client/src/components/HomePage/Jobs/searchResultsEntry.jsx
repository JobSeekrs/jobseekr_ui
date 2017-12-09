import React from 'react';
import axios from 'axios';
import Checkbox from 'rc-checkbox';
import { Link } from 'react-router-dom';

class searchResultsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      saved: false,
    };
    this.showDetails = this.showDetails.bind(this);
    this.saveJob = this.saveJob.bind(this);
  }

  showDetails() {
    this.props.showJobDetails(this.props.job);
  }

  saveJob() {
    const context = this;
    this.props.saveOrDeleteSearchedJobs(context.props.job, context.props.savedSearchedJobs);
  }

  render() {
    return (
      <div className="container">
        <div>
          <Link to="/search/details" href="/search/details">
            <h3 onClick={this.showDetails}>
              {this.props.job.title}
            </h3>
          </Link>
          <h6>{this.props.job.company}</h6>
          <h6>{this.props.job.location}</h6>
          <h6>{this.props.job.company_url}</h6>
          <Checkbox onChange={this.saveJob}/>
        </div>
      </div>
    );
  }
}

export default searchResultsEntry