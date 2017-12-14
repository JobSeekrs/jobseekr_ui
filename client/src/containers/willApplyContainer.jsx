import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import willApply from '../components/HomePage/DashBoard/WillApply';

function mapStateToProps(state) {
  return {
    dashboardLoad: state.dashboardLoad,
  };
}

export default connect(mapStateToProps)(willApply);

