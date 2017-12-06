import { combineReducers } from 'redux';
import searchJobsReducer from './searchJobsReducer';
import searchJobDetailsReducer from './searchJobDetailsReducer';

const allReducers = combineReducers({
  searchResults: searchJobsReducer,
  searchJobDetails: searchJobDetailsReducer,
});

export default allReducers;
