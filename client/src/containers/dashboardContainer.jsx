import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import dashboard from '../components/HomePage/DashBoard/index';
import dashboardAction from '../actions/dashboardLoad';
import searchJobs from '../actions/searchJobs';

function mapStateToProps(state) {
  return {
    dashboardLoad: state.dashboardLoad,
  };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        dashboardAction: dashboardAction,
        searchJobs: searchJobs
    }, dispatch);
  }

export default connect(mapStateToProps, matchDispatchToProps)(dashboard);

