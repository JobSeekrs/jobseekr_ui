import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const Cards = (props) => {

  return (
    <div className="row">
      <div className="col-md-4">
        {props.info.map((job) => {
          if (job.status === 'Will Apply') {
            return (
              <div className="card-wrapper" key={job.id}>
                <div className="card-inner">
                  <h6 className="job_company">{job.company_name}</h6>
                  <Link to="/job-detail" href="/job-detail" job={job}>
                    <h6 className="job_title">{job.job_title_name}</h6>
                  </Link>
                  <a className="original_job_url" href={'http://'+job.url !== 'http://' ? 'http://'+job.url : ""} target="_blank">Job Application</a>
                  <p className="personal_rating">Rating: {job.rating}</p>
                  <p className="job_status">Status: {job.status}</p>
                  <p className="job_deadline">Deadline: {<TimeAgo date={job.deadline} /> } </p>
                  <div className="last_applied">
                    <h6 className="last_applied_text">Created {<TimeAgo date={job.created_date} /> }</h6>
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
                <h6 className="job_company">{job.company_name}</h6>
                <Link to="/job-detail" href="/job-detail" job={job}>
                  <h6 className="job_title">{job.job_title_name}</h6>
                </Link>
                <a className="original_job_url" href={'http://'+job.url !== 'http://' ? 'http://'+job.url : ""} target="_blank">Job Application</a>
                <p className="personal_rating">Rating: {job.rating}</p>
                <p className="job_status">Status: {job.status}</p>
                <p className="job_deadline">Deadline: {<TimeAgo date={job.deadline} /> } </p>
                <div className="last_applied">
                <h6 className="last_applied_text">Created {<TimeAgo date={job.created_date} /> }</h6>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>

    <div className="col-md-4">
    {props.info.map((job) => {
      if (job.status == 'Follow Up') {
        return (
          <div className="card-wrapper" key={job.id}>
            <div className="card-inner">
              <h6 className="job_company">{job.company_name}</h6>
              <Link to="/job-detail" href="/job-detail" job={job}>
                <h6 className="job_title">{job.job_title_name}</h6>
              </Link>
              <a className="original_job_url" href={'http://'+job.url !== 'http://' ? 'http://'+job.url : ""} target="_blank">Job Application</a>
              <p className="personal_rating">Rating: {job.rating}</p>
              <p className="job_status">Status: {job.status}</p>
              <p className="job_deadline">Deadline: {<TimeAgo date={job.deadline} /> } </p>
              <div className="last_applied">
               <h6 className="last_applied_text">{<TimeAgo date={job.created_date} /> }</h6>
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

