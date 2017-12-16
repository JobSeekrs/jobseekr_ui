const jobDetailsAdditional = (state = null, action) => {
    if (action.type === 'JOB_DETAILS_ADDITIONAL') {
        console.log('action.payload: ', action.payload);
        return action.payload;
    }
    return state;
  };
  
  export default jobDetailsAdditional;