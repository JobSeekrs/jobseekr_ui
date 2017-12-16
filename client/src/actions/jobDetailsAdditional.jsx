const jobDetailsAdditional = (results) => {
    console.log('results is: ', results)
    return {
      type: 'JOB_DETAILS_ADDITIONAL',
      payload: results,
    };
  };
  
  export default jobDetailsAdditional; 
  