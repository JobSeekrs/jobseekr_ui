import React from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
import './dashboard.css';
import cards from './cards';
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
          <Route path="/home" component={cards} />
        </Switch>

      </div>
    );
  }
}

export default Home;
