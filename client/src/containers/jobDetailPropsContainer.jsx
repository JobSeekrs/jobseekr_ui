import React from 'react';
import { connect } from 'react-redux';
import jobDetails from '../components/HomePage/DashBoard/JobDescription/index';

function mapStateToProps (state) {
  return {
    jobDetails: state.searchJobDetails,
  }
}

export default connect(mapStateToProps)(jobDetails);