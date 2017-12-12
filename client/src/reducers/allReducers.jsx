import { combineReducers } from 'redux';
<<<<<<< HEAD
import searchJobsReducer from './searchJobsReducer';
import searchJobDetailsReducer from './searchJobDetailsReducer';
import dashboardReducer from './dashboardReducer';
import savedSearchedJobsReducer from './savedSearchedJobsReducers';
=======
import searchJobsReducer from './Search/searchJobsReducer';
import searchJobDetailsReducer from './Search/searchJobDetailsReducer';
import savedSearchedJobsReducer from './Search/savedSearchedJobsReducers';
>>>>>>> working on post requests

const allReducers = combineReducers({
  searchResults: searchJobsReducer,
  searchJobDetails: searchJobDetailsReducer,
  dashboardLoad: dashboardReducer,
  savedSearchedJobs: savedSearchedJobsReducer,
});

export default allReducers;
