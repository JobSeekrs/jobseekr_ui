import React from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
import './dashboard.css';
import Cards from './Cards';
import WillApply from './WillApply';
import Applied from './Applied';
import FollowUp from './FollowUp';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3002/dashboard')
      .then((res) => {
<<<<<<< refs/remotes/upstream/master
        console.log('res.data here: ', res.data);
=======
        console.log('in component did mount', res.data);
>>>>>>> [add]
        this.setState({ jobs: res.data });
      })
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
          <Route path="/home/will-apply" render={() => <WillApply info={this.state.jobs} />} />
          <Route path="/home/applied" render={() => <Applied info={this.state.jobs} />} />
          <Route path="/home/follow-up" render={() => <FollowUp info={this.state.jobs} />} />
          <Route path="/home" render={() => <Cards info={this.state.jobs} />} />
        </Switch>
      </div>
    );
  }
}

export default Home;
