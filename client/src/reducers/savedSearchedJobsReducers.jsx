const savedSearchedJobsReducer = (state = [], action) => {
  if (action.type === "SAVE_SEARCHED_JOB") {
    const savedJobs = action.payload[1];
    savedJobs.push(action.payload[0]);
    return savedJobs;
  }
  if (action.type === "ALREADY_SAVED") {
    return action.payload;
  }
  return state;
};

export default savedSearchedJobsReducer;
