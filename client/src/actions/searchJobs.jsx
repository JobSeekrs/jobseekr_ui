const searchJobs = (results) => {
  return {
    type: 'SEARCH',
    payload: results,
  };
};

export default searchJobs; 
