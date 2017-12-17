import React from 'react';
import { connect } from 'react-redux';
import activityLog from '../components/HomePage/DashBoard/JobDescription/activityLog';

function mapStateToProps(state) {
  return {
    jobDetails: state.searchJobDetails,
    jobDetailsAdditional: state.jobDetailsAdditional,
  }
};

export default connect(mapStateToProps)(activityLog);
