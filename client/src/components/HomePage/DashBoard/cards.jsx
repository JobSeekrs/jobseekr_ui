import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {


  return (
    <div className="row">
      <div className="col-md-4">
        {props.info.map((job) => {
          if (job.status === 'Will Apply') {
            return (
              <div className="card-wrapper" key={job.id}>
                <div className="card-inner">
                  <h6 className="job_company">{job.companyId}</h6>
                  <Link to="/job-detail" href="/job-detail" job={job}>
                    <h6 className="job_title">{job.name}</h6>
                  </Link>
                  <a className="original_job_url" href={'http://'+job.link !== 'http://' ? 'http://'+job.link : ""} target="_blank">Link</a>
                  <p className="personal_rating">Rating: {job.priority}</p>
                  <p className="job_status">Status: {job.status}</p>
                  <p className="job_deadline">Deadline: {job.deadline}</p>
                  <div className="last_applied">
                    <h6 className="last_applied_text">6 months ago UPDATE</h6>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="col-md-4">
        {props.info.map((job) => {
          if (job.status === 'Applied') {
            return (
              <div className="card-wrapper" key={job.id}>
                <div className="card-inner">
                  <h6 className="job_company">{job.companyId}</h6>
                  <Link to="/job-detail" href="/job-detail">
                    <h6 className="job_title">{job.name}</h6>
                  </Link>
                  <a className="original_job_url" href={'http://'+job.link !== 'http://' ? 'http://'+job.link : ""} target="_blank">Link</a>
                  <p className="personal_rating">Rating: {job.priority}</p>
                  <p className="job_status">Status: {job.status}</p>
                  <p className="job_deadline">Deadline: {job.deadline}</p>
                  <div className="last_applied">
                    <h6 className="last_applied_text">6 months ago UPDATE</h6>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="col-md-4">
        {props.info.map((job) => {
          if (job.status === 'Follow Up') {
            return (
              <div className="card-wrapper" key={job.id}>
                <div className="card-inner">
                  <h6 className="job_company">{job.companyId}</h6>
                  <Link to="/job-detail" href="/job-detail">
                    <h6 className="job_title">{job.name}</h6>
                  </Link>
                  <a className="original_job_url" href={'http://'+job.link !== 'http://' ? 'http://'+job.link : ""} target="_blank">Link</a>
                  <p className="personal_rating">Rating: {job.priority}</p>
                  <p className="job_status">Status: {job.status}</p>
                  <p className="job_deadline">Deadline: {job.deadline}</p>
                  <div className="last_applied">
                    <h6 className="last_applied_text">6 months ago UPDATE</h6>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

    </div>
  );
};

export default Cards;

