import React from 'react';
import { Link } from 'react-router-dom';

const searchJobDetails = (props) => (
    <div>
      <input type="text" value={props.value} onChange={props.handleChange} onKeyPress={props.handleKeyPressDetails}/>
      <Link to="/search" href="/search">
        <button onClick={props.clicked}>Click this to test github api</button>
      </Link>
      <Link to="/search" href="/search">Back to Results</Link>
      <div>
        <h1>{props.jobDetails.title}</h1>
        <h4>{props.jobDetails.company}</h4>
        <h4>{props.jobDetails.company_url}</h4>
        <h4>{props.jobDetails.location}</h4>
        <h4>{props.jobDetails.description.replace(/<(?:.|\n)*?>/gm, '')}</h4>
        <h4>{props.jobDetails.how_to_apply.replace(/<(?:.|\n)*?>/gm, '')}</h4>
      </div>
    </div>
);


export default searchJobDetails;