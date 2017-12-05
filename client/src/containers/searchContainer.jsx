import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import search from '../components/HomePage/Jobs/search';
import searchJobs from '../actions/searchJobs';

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    searchJobs: searchJobs,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(search);

