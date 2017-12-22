import React, { Component } from 'react';

const InitialInfo = (props) => {
  return (
    <div className="container">
      <h4 className="card-header">Job Info</h4>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers">Job Title</h6>
          <div className="job-details-headers">{props.jobDetails.job_title_name}</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers">Deadline</h6>
          {/* <div>{props.jobDetails.deadline.split('T')[0]}</div> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers">Status</h6>
          <div className="job-details-headers">{props.jobDetails.status}</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers">Priority</h6>
          <div className="job-details-headers">{props.jobDetails.rating}</div>
        </div>
      </div>
      <h6 className="job-details-headers">Description</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.job_description}</div>
      <h6 className="job-details-headers">Source</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.job_source}</div>
      <h6 className="job-details-headers">Job Application URL</h6>
      <div className="job-details-headers">{props.jobDetails.url}</div>
      <h4 className="card-header push-top-sm">Company Info</h4>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers">Company Name</h6>
          <div className="job-details-headers">{props.jobDetails.company_name}</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers">Company Phone</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_phone}</div>
        </div>
      </div>
      <h6 className="job-details-headers">Address 1</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.company_address1}</div>
      <h6 className="job-details-headers">Address 2</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.company_address2}</div>
      <div className="row">
        <div className="col-md-4">
          <h6 className="job-details-headers">City</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_city}</div>
        </div>
        <div className="col-md-4">
          <h6 className="job-details-headers">State</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_state}</div>
        </div>
        <div className="col-md-4">
          <h6 className="job-details-headers">ZIP</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.company_zip}</div>
        </div>
      </div>
      <h6 className="job-details-headers">Company Description</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.company_description}</div>
      <h4 className="card-header push-top-sm">Contact Info</h4>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers">First Name</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.contact_first_name}</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers">Last Name</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.contact_last_name}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h6 className="job-details-headers">Job Title</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.contact_title}</div>
        </div>
        <div className="col-md-6">
          <h6 className="job-details-headers">Phone Number</h6>
          <div className="job-details-headers">{props.jobDetailsAdditional.contact_phone}</div>
        </div>
      </div>
      <h6 className="job-details-headers">Email</h6>
      <div className="job-details-headers">{props.jobDetailsAdditional.contact_email}</div>
    </div>
  );
};

export default InitialInfo;
