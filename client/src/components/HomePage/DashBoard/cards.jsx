import React from 'react';

const Cards = (props) => (
  <div className="row">
    {console.log(props.info.jobs)}
    {props.info.map(job => (
      <div className="col-md-4" key={job.id}>
        <div className="card-wrapper">
          <div className="card-inner">
            <h6 className="job_company">{job.companyId}</h6>
            <h6 className="job_title">{job.name}</h6>
            <a className="original_job_url" href={'http://'+job.link} target="_blank">UPDATE Name of will Go here</a>
            <p className="personal_rating">Rating: {job.priority}</p>
            <div className="last_applied">
              <h6 className="last_applied_text">6 months ago UPDATE</h6>
            </div>
          </div>
        </div>
      </div>))}
  </div>);


export default Cards;

