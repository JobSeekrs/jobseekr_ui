const saveOrDeleteSearchedJobs = (job, savedJobs) => {
  if (savedJobs.includes(job) && job.checked === true) {
    return {
      type: "ALREADY_SAVED_OR_DELETE",
      payload: savedJobs
    };
  } else if (job.checked === false) {
    const index = savedJobs.indexOf(job);
    savedJobs.splice(index, 1);
    return {
      type: "ALREADY_SAVED_OR_DELETE",
      payload: savedJobs
    }
  }
  else {
    return {
      type: "SAVE_SEARCHED_JOB",
      payload: [job, savedJobs]
    }
  }
};

export default saveOrDeleteSearchedJobs;
