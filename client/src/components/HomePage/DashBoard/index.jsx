import React from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
import './dashboard.css';
import willApply from './willApply';
import applied from './applied';
import followUp from './followUp';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/getJobs')
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container push-top">
        <div className="row push-bottom">
          <div className="col-md-4">
            <div className="job-tab">
              <Link to="/home/will-apply" href="/home/will-apply">Will Apply</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="job-tab">
              <Link to="/home/applied" href="/home/applied">Applied</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="job-tab">
              <Link to="/home/follow-up" href="/home/follow-up">Follow-Up</Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/home/will-apply" component={willApply} />
          <Route path="/home/applied" component={applied} />
          <Route path="/home/follow-up" component={followUp} />
          <div className="row">
            <div className="col-md-4">
              <div className="card-wrapper">
                <div className="card-inner">
                  <h6 className="job_company">Google</h6>
                  <h6 className="job_title">Full-Stack Developer</h6>
                  <a className="original_job_url" href="https://www.google.com">Original Posting</a>
                  <p className="personal_rating">Rating: 1</p>
                  <div className="last_applied">
                    <h6 className="last_applied_text">6 months ago</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </div>
    );
  }
}

export default Home;
