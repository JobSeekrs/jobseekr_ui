import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import searchJobsReducer from './Search/searchJobsReducer';
import searchJobDetailsReducer from './Search/searchJobDetailsReducer';
import savedSearchedJobsReducer from './Search/savedSearchedJobsReducers';
// import rootReducer from './rootReducer';


const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_DATA') {
    console.log('root reducer returning')
    state = undefined;
    return allReducers
  }
  return state = null
};

const allReducers = combineReducers({
  searchResults: searchJobsReducer,
  searchJobDetails: searchJobDetailsReducer,
  dashboardLoad: dashboardReducer,
  savedSearchedJobs: savedSearchedJobsReducer,
  rootReducer: rootReducer,
});

export default allReducers;
