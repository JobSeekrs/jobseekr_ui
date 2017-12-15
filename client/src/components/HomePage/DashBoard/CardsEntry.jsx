import React from 'react';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';


const CardsEntry = (props) => {
    return (
      <div className="card-wrapper">
        <div className="card-inner">
          <h6 className="job_company">{props.job.company_name}</h6>
          <Link to="/job-detail" href="/job-detail" job={job}>
            <h6 className="job_title">{props.job.job_title_name}</h6>
          </Link>
          <a className="original_job_url" href={'http://' + props.job.url !== 'http://' ? 'http://' + props.job.url : ""} target="_blank">Job Application</a>
          <p className="personal_rating">Rating: {props.job.rating}</p>
          <p className="job_status">Status: {props.job.status}</p>
          <p className="job_deadline">Deadline: {<TimeAgo date={props.job.deadline} /> } </p>
          <div className="last_applied">
          <h6 className="last_applied_text">{<TimeAgo date={props.job.created_date} /> }</h6>
          </div>
        </div>
     </div>
    );
};

export default Cards;