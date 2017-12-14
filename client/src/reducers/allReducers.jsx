import { combineReducers } from 'redux';
import searchJobsReducer from './searchJobsReducer';
import searchJobDetailsReducer from './searchJobDetailsReducer';
import dashboardReducer from './dashboardReducer';

const allReducers = combineReducers({
  searchResults: searchJobsReducer,
  searchJobDetails: searchJobDetailsReducer,
  dashboardLoad: dashboardReducer,
});

export default allReducers;
