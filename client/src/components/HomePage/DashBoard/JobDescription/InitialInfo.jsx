import React, { Component } from 'react';

const InitialInfo = (props) => {
  return (
    <div className="container">
      <h4>Job Info</h4>
      <div className="row">
        <div className="col-md-6">
          <h6>Job Title</h6>
          <div>{props.jobDetails.job_title_name}</div>
        </div>
        <div className="col-md-6">
          <h6>Deadline</h6>
          <div>{props.jobDetails.deadline.split('T')[0]}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        <h6>Status</h6>
        <div>{props.jobDetails.status}</div>
        </div>
        <div className="col-md-6">
        <h6>Priority</h6>
        <div>{props.jobDetails.rating}</div>
        </div>
      </div>
        <h6>Description</h6>
        <div>Description</div>
        <h6>Source</h6>
        <div>Source</div>
        <h6>Job Application URL</h6>
        <div>{props.jobDetails.url}</div>
      <h4>Company Info</h4>
        <div className="row">
          <div className="col-md-6">
            <h6>Company Name</h6>
            <div>{props.jobDetails.company_name}</div>
          </div>
          <div className="col-md-6">
            <h6>Company Number</h6>
            <div>Company Number</div>
          </div>
        </div>
        <h6>Address 1</h6>
        <div>Address1</div>
        <h6>Address 2</h6>
        <div>Address2</div>
        <div className="row">
          <div className="col-md-4">
            <h6>City</h6>
            <div>City</div>
          </div>
          <div className="col-md-4">
            <h6>State</h6>
            <div>State</div>
          </div>
          <div className="col-md-4">
            <h6>ZIP</h6>
            <div>ZIP</div>
          </div>
        </div>
        <h6>Company Description</h6>
        <div>Description</div>
      <h4>Contact Info</h4>
        <div className="row">
          <div className="col-md-6">
            <h6>First Name</h6>
            <div>First Name</div>
          </div>
          <div className="col-md-6">
            <h6>Last Name</h6>
            <div>Last Name</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h6>Job Title</h6>
            <div>Title</div>
          </div>
          <div className="col-md-6">
            <h6>Phone Number</h6>
            <div>Phone Number</div>
          </div>
        </div>
        <h6>Email</h6>
        <div>Email</div>
    </div>
  );
};

export default InitialInfo;
