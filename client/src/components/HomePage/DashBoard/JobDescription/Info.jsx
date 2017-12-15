import React from 'react';

const Info = (props) => {
  return (
    <div>
      <button>Edit</button>
      <h4>Job Info</h4>
        <h6>Job Title</h6>
        <div>{props.jobDetails.job_title_name}</div>
        <div>{props.jobDetails.deadline}</div>
        <div>{props.jobDetails.status}</div>
        <div>{props.jobDetails.rating}</div>
        <div>Description</div>
        <div>Source</div>
        <div>{props.jobDetails.url}</div>
      <h4>Company Info</h4>
        <div>{props.jobDetails.company_name}</div>
        <div>Address1</div>
        <div>Address2</div>
        <div>City</div>
        <div>State</div>
        <div>ZIP</div>
        <div>Description</div>
      <h4>Contact Info</h4>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Title</div>
        <div>Phone Number</div>
        <div>Email</div>
      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
};

export default Info;
