const dashboardLoad = (state = [], action) => {
    console.log('shouldnt be hitting')
    if (action.type === 'DASHBOARD_LOAD') {
        return action.payload;
    }
    return state;
  };
  
  export default dashboardLoad;