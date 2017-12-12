import React from 'react';
import axios from 'axios';
import Checkbox from 'rc-checkbox';
import { Link } from 'react-router-dom';

class searchResultsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.showDetails = this.showDetails.bind(this);
    this.saveOrDeleteJob = this.saveOrDeleteJob.bind(this);
  }

  showDetails() {
    this.props.showJobDetails(this.props.job);
  }

  saveOrDeleteJob() {
    if (this.props.job.checkbox === 0 || this.props.job.checkbox === undefined) {
      this.props.saveOrDeleteJob(this.props.job, true, 1);
      this.setState({
        checked: true
      })
    } else {
      this.props.saveOrDeleteJob(this.props.job, false, 0);
      this.setState({
        checked : false
      })
    }
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
          <h6>{this.props.job.company.name}</h6>
          <h6>{this.props.job.company.location.name}</h6>
          <h6>{this.props.job.company.url}</h6>
          <Checkbox  checked={this.props.job.checkbox === undefined ? (0) : this.props.job.checkbox} onChange={this.saveOrDeleteJob} />
        </div>
      </div> 
    )
  }
}

export default searchResultsEntry