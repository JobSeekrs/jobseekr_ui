import React from 'react';
import { connect } from 'react-redux';
import EditJobNotes from '../../components/HomePage/DashBoard/JobDescription/Notes';

function mapStateToProps (state) {
  return {
    jobDetailsAdditional: state.jobDetailsAdditional
  }
}

export default connect(mapStateToProps)(EditJobNotes);