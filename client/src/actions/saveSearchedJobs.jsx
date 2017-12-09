const saveOrDeleteSearchedJobs = (job, savedJobs) => {
  if (savedJobs.includes(job)) {
    return {
      type: "ALREADY_SAVED",
      payload: savedJobs
    };
  } else {
    return {
      type: "SAVE_SEARCHED_JOB",
      payload: [job, savedJobs]
    }
  }
};

export default saveOrDeleteSearchedJobs;
