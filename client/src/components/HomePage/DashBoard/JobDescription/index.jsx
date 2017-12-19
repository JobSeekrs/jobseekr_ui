import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
import ActivityLog from '../../../../containers/activityLogContainer';
import Email from './emails';
import Info from './Info';
import Notes from '../../../../containers/EditInfo/EditNotesPropsContainer';
import Notifications from './notifications';
import EditInfo from '../../../../containers/EditInfo/EditInfoPropsContainer';

class JobDetail extends Component {
  constructor() {
    super()
  }

componentWillMount(){
  var context = this;
  axios.post('http://localhost:3002/jobDetail', {
    jobId: this.props.jobDetails.id
  }).then((res) => {
    context.props.jobDetailsAction(res.data[0]);
  })
}

componentDidMount() {
  window.scrollTo(0,0)
};

  render() {
    console.log('REDUX STATE STUFF', this.props.jobDetailsAdditional);
    return (
      <div className="container push-top-sm">
        <div className="row justify-content-md-center text-center">
          <div className="col-md-4 push-top">
            <div className="left-align">
              <h4>{this.props.jobDetails.company_name} - {this.props.jobDetails.job_title_name}</h4>
              <h5>{this.props.jobDetails.status}</h5>
              <h5>Rating: {this.props.jobDetails.rating}</h5>
              {/* <h6>Deadline: {this.props.jobDetails.deadline.split('T')[0]}</h6> */}
              <a href={'http://' + this.props.jobDetails.url} target="_blank">Job Application Link</a>
            </div>
          </div>
        </div>
        <div className="row push-bottom-sm push-top-sm justify-content-md-center">
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
        
        <div className="job-detail-sections">
          <Switch>
            <Route path="/job-detail/notes" render={() => <Notes />} />
            <Route path="/job-detail/notifications" render={() => <Notifications />} />
            <Route path="/job-detail/email" render={() => <Email />} />
            <Route path="/job-detail/activity-log" render={() => <ActivityLog jobId={this.props.jobDetailsAdditional.jobId}/>} />
            <Route path="/job-detail/edit-info" render={() => <EditInfo />} />
            <Route path="/job-detail" render={() => <Info />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default JobDetail;
