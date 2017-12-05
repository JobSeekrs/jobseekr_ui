import { combineReducers } from 'redux';
import searchJobsReducer from './searchJobsReducer';

const allReducers = combineReducers({
  searchResults: searchJobsReducer,
});

export default allReducers;
