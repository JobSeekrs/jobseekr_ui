import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import dashboard from '../components/HomePage/DashBoard/index';
import dashboardAction from '../actions/dashboardLoad';
import clearData from '../actions/clearData';

function mapStateToProps(state) {
  return {
    dashboardLoad: state.dashboardLoad,
  };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        dashboardAction: dashboardAction,
        clearData: clearData
    }, dispatch);
  }

export default connect(mapStateToProps, matchDispatchToProps)(dashboard);

