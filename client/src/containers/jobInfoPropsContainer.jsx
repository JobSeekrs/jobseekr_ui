import React from 'react';
import { connect } from 'react-redux';
import jobInfoDetails from '../components/HomePage/DashBoard/JobDescription/Info';

function mapStateToProps (state) {
  return {
    jobDetails: state.searchJobDetails,
  }
}

export default connect(mapStateToProps)(jobInfoDetails);