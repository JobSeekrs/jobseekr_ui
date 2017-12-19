const activityLog = (data) => {
  return {
    type: "ACTIVITY_LOG",
    payload: data
  }
};

export default activityLog;