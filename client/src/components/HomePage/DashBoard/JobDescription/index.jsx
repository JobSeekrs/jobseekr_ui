import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
import ActivityLog from './activityLog';
import Email from './emails';
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
            <h4>Company Name, Job Title</h4>
            <h5>Job Status</h5>
            <h6>Deadline</h6>
            <h6>Job App Link</h6>
          </div>
        </div>
        <div className="row push-bottom">
          <div className="col-md-3">
            <div className="job-tab">
              <Link to="/job-detail" href="/job-detail">Notes</Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="job-tab">
              <Link to="/job-detail/notifications" href="/job-detail/notifications">Notifications</Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="job-tab">
              <Link to="/job-detail/email" href="/job-detail/email">Email</Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="job-tab">
              <Link to="/job-detail/activity-log" href="/job-detail/activity-log">Activity Log</Link>
            </div>
          </div>
        </div>
        
        <Switch>
          <Route path="/job-detail/notifications" render={() => <Notifications />} />
          <Route path="/job-detail/email" render={() => <Email />} />
          <Route path="/job-detail/activity-log" render={() => <ActivityLog />} />
          <Route path="/job-detail" render={() => <Notes />} />
        </Switch>
      </div>
    );
  }
}

export default JobDetail;
