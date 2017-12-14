// const searchJobs = (results) => {
//   console.log('this is listings', results.listings.listing)
//   if (results.listings) {
//     return {
//       type: 'SEARCH',
//       payload: results.listings.listing,
//     }; 
//   } else {
//     return {
//       type: 'SEARCH',
//       payload: results
//     }
//   }
// };


const searchJobs = (results) => {
  if (results === []) {
    return {
      type: 'SEARCH',
      payload: results,
    }; 
  } else if (results.listings) {
    return {
      type: 'SEARCH',
      payload: results.listings.listing
    }
  } else {
    return {
      type: 'SEARCH',
      payload: results
    }
  }
};
export default searchJobs; 