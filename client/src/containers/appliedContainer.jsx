// import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import applied from '../components/HomePage/DashBoard/applied';

function mapStateToProps(state) {
  return {
    dashboardLoad: state.dashboardLoad,
  };
}

export default connect(mapStateToProps)(applied);

