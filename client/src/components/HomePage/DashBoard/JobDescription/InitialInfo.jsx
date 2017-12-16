import React, { Component } from 'react';

const InitialInfo = (props) => {
  return (
    <div>
      <h4>Job Info</h4>
        <h6>Job Title</h6>
        <div>{props.jobDetails.job_title_name}</div>
        <h6>Deadline</h6>
        <div>{props.jobDetails.deadline}</div>
        <h6>Status</h6>
        <div>{props.jobDetails.status}</div>
        <h6>Priority</h6>
        <div>{props.jobDetails.rating}</div>
        <h6>Description</h6>
        <div>Description</div>
        <h6>Source</h6>
        <div>Source</div>
        <h6>Job Application URL</h6>
        <div>{props.jobDetails.url}</div>
      <h4>Company Info</h4>
        <h6>Company Name</h6>
        <div>{props.jobDetails.company_name}</div>
        <h6>Address 1</h6>
        <div>Address1</div>
        <h6>Address 2</h6>
        <div>Address2</div>
        <h6>City</h6>
        <div>City</div>
        <h6>State</h6>
        <div>State</div>
        <h6>ZIP</h6>
        <div>ZIP</div>
        <h6>Company Description</h6>
        <div>Description</div>
      <h4>Contact Info</h4>
        <h6>First Name</h6>
        <div>First Name</div>
        <h6>Last Name</h6>
        <div>Last Name</div>
        <h6>Job Title</h6>
        <div>Title</div>
        <h6>Phone Number</h6>
        <div>Phone Number</div>
        <h6>Email</h6>
        <div>Email</div>
    </div>
  );
};

export default InitialInfo;
