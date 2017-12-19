import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchJobs from '../actions/searchJobs';
import Navigation from '../components/Navigation/Navigation';

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    searchJobs: searchJobs
  }, dispatch)
};

export default connect(null, matchDispatchToProps)(Navigation);