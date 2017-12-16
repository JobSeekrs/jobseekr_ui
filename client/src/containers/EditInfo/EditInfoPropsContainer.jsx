import React from 'react';
import { connect } from 'react-redux';
import EditInfoDetails from '../../components/HomePage/DashBoard/JobDescription/EditInfo/EditInfo';

function mapStateToProps (state) {
  return {
    jobDetails: state.searchJobDetails,
  }
}

export default connect(mapStateToProps)(EditInfoDetails);