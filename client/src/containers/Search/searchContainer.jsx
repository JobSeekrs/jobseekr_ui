import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import search from '../../components/HomePage/Jobs/Search/search';
import searchJobs from '../../actions/searchJobs';
import saveOrDeleteSearchedJobs from '../../actions/saveSearchedJobs';

function mapStateToProps(state) {
  return {
    savedSearchedJobs: state.savedSearchedJobs
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    searchJobs: searchJobs,
    saveOrDeleteSearchedJobs: saveOrDeleteSearchedJobs
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(search);
