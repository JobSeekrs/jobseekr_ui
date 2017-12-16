import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import searchJobsReducer from './Search/searchJobsReducer';
import searchJobDetailsReducer from './Search/searchJobDetailsReducer';
import savedSearchedJobsReducer from './Search/savedSearchedJobsReducers';

const allReducers = combineReducers({
  searchResults: searchJobsReducer,
  searchJobDetails: searchJobDetailsReducer,
  dashboardLoad: dashboardReducer,
  savedSearchedJobs: savedSearchedJobsReducer,
});


export default allReducers;
