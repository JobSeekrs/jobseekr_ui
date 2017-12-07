import React from 'react';
import { Link } from 'react-router-dom';

const searchJobDetails = (props) => (
  <div>
    <Link to="/search" href="/search">Back to Results</ Link>
    <div>
      <h1>{props.jobDetails.title}</h1>
      <h4>{props.jobDetails.company}</h4>
      <h4>{props.jobDetails.company_url}</h4>
      <h4>{props.jobDetails.location}</h4>
      <h4>{props.jobDetails.description}</h4>
      <h4>{props.jobDetails.how_to_apply}</h4>
    </div>
  </div>
)

export default searchJobDetails;
