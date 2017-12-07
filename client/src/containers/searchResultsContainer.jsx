import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchResults from '../components/HomePage/Jobs/searchResults';

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
  };
}


export default connect(mapStateToProps)(searchResults);

