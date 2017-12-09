import React from 'react';
import SearchResultsEntry from '../../../containers/searchJobDetailActionContainer';

const searchResults = (props) => {
  return (
    <div>
        {console.log(props.savedSearchedJobs.length)}
        {props.savedSearchedJobs.length === 0 ? (
          <div>
            <input type="text" value={props.value} onKeyPress={props.handleKeyPress} onChange={props.handleChange} />
            <button onClick={props.clicked}>Click this to test github api</button>
            {props.searchResults.map((job, i) => (
              <SearchResultsEntry job={job} key={i} />
            ))}
          </div>
        ) : <div>
              <input type="text" value={props.value} onKeyPress={props.handleKeyPress} onChange={props.handleChange} />
              <button onClick={props.clicked}>Click this to test github api</button>
              <button onClick={props.saveJobs}>Save Jobs</button>
              {props.searchResults.map((job, i) => (
                <SearchResultsEntry job={job} key={i} />
              ))}
          </div>
        }
    </div>
  )
};


export default searchResults;

