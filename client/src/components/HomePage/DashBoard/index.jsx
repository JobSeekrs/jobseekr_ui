import React from 'react';
import './dashboard.css';

const home = () => (
  <div className="container push-top">
    <div className="row">
      <div className="col-md-4">
        <div className="card-wrapper">
          <div className="card-inner">
            <h6 className="job_company">Google</h6>
            <h6 className="job_title">Full-Stack Developer</h6>
            <a className="original_job_url" href="https://www.google.com">Original Posting</a>
            <p className="personal_rating">Rating: 1</p>
            <div className="last_applied">
              6 months ago
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card-wrapper">
          <div className="card-inner">
            <h6 className="job_company">Google</h6>
            <h6 className="job_title">Full-Stack Developer</h6>
            <a className="original_job_url" href="https://www.google.com">Original Posting</a>
            <p className="personal_rating">Rating: 1</p>
            <div className="last_applied">
              6 months ago
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card-wrapper">
          <div className="card-inner">
            <h6 className="job_company">Google</h6>
            <h6 className="job_title">Full-Stack Developer</h6>
            <a className="original_job_url" href="https://www.google.com">Original Posting</a>
            <p className="personal_rating">Rating: 1</p>
            <div className="last_applied">
              6 months ago
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default home;
