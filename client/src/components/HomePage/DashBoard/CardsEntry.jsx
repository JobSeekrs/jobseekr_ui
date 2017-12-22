import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import moment from 'moment-timezone';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
// import axios from 'axios';

class CardsEntry extends React.Component {
  constructor(props) {
    super(props);

    this.showDetails = this.showDetails.bind(this);
    this.today = new Date();
    this.currdate = '';
  }

  showDetails() {
    this.props.showJobDetails(this.props.job);
  }

  checkTimeForUTC() {
    if (this.today.getHours() >= 16) {
      this.currdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth()+1).toString() + '-' + (this.today.getDate() + 1).toString();
    } else {
      this.currdate = this.today.getFullYear().toString() + '-' + (this.today.getMonth()+1).toString() + '-' + this.today.getDate().toString();
    }
    return this.currdate;
  }

  render() {
    return (
      <div className="card-wrapper">
        <div className="card-inner">
          <h6 className="job_company">{this.props.job.company_name}</h6>
          <Link to="/job-detail" href="/job-detail" job={this.props.job}>
            <h6 className="job_title" onClick={this.showDetails}>{this.props.job.job_title_name}</h6>
          </Link>
          <a className="original_job_url" href={'http://' + this.props.job.url !== 'http://' ? 'http://' + this.props.job.url : ""} target="_blank">Job Application</a>
          <p className="personal_rating">Rating: {this.props.job.rating}</p>
          <p className="job_status">Status: {this.props.job.status}</p>
          <div className="last_applied">
            <h6 className="last_applied_text">Created: { this.checkTimeForUTC() == this.props.job.created_date.split('T')[0] ? 'Today' : <TimeAgo date={this.props.job.created_date} />}</h6>
          </div>
        </div>
      </div>
    );
  }
};

export default CardsEntry;