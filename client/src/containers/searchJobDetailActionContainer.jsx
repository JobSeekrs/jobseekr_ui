import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchResultsEntry from '../components/HomePage/Jobs/searchResultsEntry';
import showJobDetails from '../actions/jobDetails';

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    showJobDetails: showJobDetails,
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(searchResultsEntry);
