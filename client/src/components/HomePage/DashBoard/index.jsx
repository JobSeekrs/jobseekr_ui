import React from 'react';
import axios from 'axios';
import { Link, Switch, Route, NavLink } from 'react-router-dom';
import './dashboard.css';
import Cards from '../../../containers/cardsContainer';
import WillApply from '../../../containers/willApplyContainer';
import Applied from '../../../containers/appliedContainer';
import FollowUp from '../../../containers/followUpContainer';
import dashboardContainer from '../../../containers/dashboardContainer';
import auth from '../../../helpers/auth';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // auth.refresh();
    var context = this;
    axios.get(`${auth.serverUrl}/dashboard`)
      .then((res) => {
        console.log('this is res.data', res.data)
        if (res.data.length === 0) {
          context.props.dashboardAction([]);
        } else {
          context.props.dashboardAction(res.data);
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container push-top">
        <div className="row push-bottom">
          <div className="col-md-4">
            <div className="job-tab">
              <NavLink to="/home/will-apply" activeClassName="selected" href="/home/will-apply">Will Apply</NavLink>
            </div>
          </div>
          <div className="col-md-4">
            <div className="job-tab">
              <NavLink to="/home/applied" activeClassName="selected" href="/home/applied">Applied</NavLink>
            </div>
          </div>
          <div className="col-md-4">
            <div className="job-tab">
              <NavLink to="/home/follow-up" activeClassName="selected" href="/home/follow-up">Follow-Up</NavLink>
            </div>
          </div>
        </div>

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
