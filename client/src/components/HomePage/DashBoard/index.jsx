import React from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';
import './dashboard.css';
import Cards from '../../../containers/cardsContainer';
import WillApply from '../../../containers/willApplyContainer';
import Applied from '../../../containers/appliedContainer';
import FollowUp from '../../../containers/followUpContainer';
import dashboardContainer from '../../../containers/dashboardContainer';


class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.clearStore = this.clearStore.bind(this);
  }

  componentDidMount() {
    var context = this;
    axios.get('http://localhost:3002/dashboard')
      .then((res) => {
        context.props.dashboardAction(res.data);
      })
      .catch(err => console.log(err));
  }
  clearStore() {
    console.log('clearing')
    localStorage.clear();
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
        <button onClick={this.clearStore}>Clear</button>

        <Switch>
          <Route path="/home/will-apply" render={() => <WillApply />} />
          <Route path="/home/applied" render={() => <Applied />} />
          <Route path="/home/follow-up" render={() => <FollowUp />} />
          <Route path="/home" render={() => <Cards />} />
        </Switch>
      </div>
    );
  }
}

export default Home;
