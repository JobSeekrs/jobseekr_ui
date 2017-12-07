import React from 'react';

const cards = () => (
  <div className="row">
    <div className="col-md-4">
      <div className="card-wrapper">
        <div className="card-inner">
          <h6 className="job_company">Google</h6>
          <h6 className="job_title">Full-Stack Developer</h6>
          <a className="original_job_url" href="https://www.google.com">Original Posting</a>
          <p className="personal_rating">Rating: 1</p>
          <div className="last_applied">
            <h6 className="last_applied_text">6 months ago</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default cards;
