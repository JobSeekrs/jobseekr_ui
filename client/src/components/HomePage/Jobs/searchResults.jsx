import React from 'react';
import SearchResultsEntry from '../../../containers/searchJobDetailActionContainer';

const searchResults = (props) => (
  <div>
    {props.searchResults.map((job, i) => (
      <SearchResultsEntry job={job}/>
    ))}
  </div>
)


export default searchResults;
