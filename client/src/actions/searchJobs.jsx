const searchJobs = (results) => {
  if (results.listings) {
    return {
      type: 'SEARCH',
      payload: results.listings.listing,
    }; 
  } else {
    return {
      type: 'SEARCH',
      payload: results
    }
  }
};

export default searchJobs; 
