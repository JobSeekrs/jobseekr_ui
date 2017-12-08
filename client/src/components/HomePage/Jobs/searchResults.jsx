import React from 'react';
import SearchResultsEntry from '../../../containers/searchJobDetailActionContainer';

const searchResults = (props) => (
  <div>
    <input type="text" value={props.value} onKeyPress={props.handleKeyPress} onChange={props.handleChange} />
    <button onClick={props.clicked}>Click this to test github api</button>
    {props.searchResults.map((job, i) => (
      <SearchResultsEntry job={job} key={i}/>
    ))}
  </div>
);


export default searchResults;
