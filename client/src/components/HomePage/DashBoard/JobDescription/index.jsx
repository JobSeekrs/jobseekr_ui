import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
import ActivityLog from './activityLog';
import Email from './emails';
import Info from './Info';
import Notes from './notes';
import Notifications from './notifications';


class JobDetail extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container push-top">
        <div className="row justify-content-md-center">
          <div className="col-md-12">
            <h4>{this.props.jobDetails.company_name}, {this.props.jobDetails.job_title_name}</h4>
            <h5>{this.props.jobDetails.status}</h5>
            <h5>{this.props.jobDetails.rating}</h5>
            <h6>{this.props.jobDetails.deadline}</h6>
            <h6>{this.props.jobDetails.url}</h6>
          </div>
        </div>
        <div className="row push-bottom justify-content-md-center">
          <div className="col-md-2">
            <div className="job-tab">
              <Link to="/job-detail" href="/job-detail">Info</Link>
            </div>
          </div>
          <div className="col-md-2">
            <div className="job-tab">
              <Link to="/job-detail/notes" href="/job-detail/notes">Notes</Link>
            </div>
          </div>
          <div className="col-md-2">
            <div className="job-tab">
              <Link to="/job-detail/notifications" href="/job-detail/notifications">Notifications</Link>
            </div>
          </div>
          <div className="col-md-2">
            <div className="job-tab">
              <Link to="/job-detail/email" href="/job-detail/email">Email</Link>
            </div>
          </div>
          <div className="col-md-2">
            <div className="job-tab">
              <Link to="/job-detail/activity-log" href="/job-detail/activity-log">Activity Log</Link>
            </div>
          </div>
        </div>
        
        <Switch>
          <Route path="/job-detail/notes" render={() => <Notes />} />
          <Route path="/job-detail/notifications" render={() => <Notifications />} />
          <Route path="/job-detail/email" render={() => <Email />} />
          <Route path="/job-detail/activity-log" render={() => <ActivityLog />} />
          <Route path="/job-detail" render={() => <Info />} />
        </Switch>
      </div>
    );
  }
}

export default JobDetail;
