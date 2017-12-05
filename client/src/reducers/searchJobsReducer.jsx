const searchJobs = (state = [], action) => {
  if (action.type === 'SEARCH') {
    return action.payload;
  }
  return state;
};

export default searchJobs;
