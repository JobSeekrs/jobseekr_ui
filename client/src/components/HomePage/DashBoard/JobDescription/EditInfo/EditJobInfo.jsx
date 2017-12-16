import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

const EditJobInfo = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              id="jobTitleInput"
              placeholder="Title"
              name="jobTitle"
              value={props.jobTitle}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Deadline</label>
            <DatePicker
              className="form-control"
              id="jobDeadlineSelect"
              selected={props.jobDeadline}
              onChange={props.handleChange}
              dateFormat="LL"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Current Status</label>
            <select
              className="form-control"
              id="jobStatusSelect"
              name="jobStatus"
              onChange={props.handleUserInput}
            >
              <option value="Will Apply">Will Apply</option>
              <option value="Applied">Applied</option>
              <option value="Follow Up">Follow Up</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Priority: 5 being your dream job</label>
            <select
              className="form-control"
              id="jobPrioritySelect"
              name="jobPriority"
              onChange={props.handleUserInput}
            >
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group text-area">
        <label>Description</label>
        <textarea
          className="form-control"
          id="notesInput"
          rows="3"
          maxLength="255"
          placeholder="Job description"
          name="jobDescription"
          value={props.jobDescription}
          onChange={props.handleUserInput}
        />
      </div>
      <p className="char-count">{props.jobDescriptionCharLeft} characters left</p>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Source</label>
            <input
              type="text"
              className="form-control"
              id="jobSourceInput"
              placeholder="Where did you hear about this job?"
              name="jobSource"
              value={props.jobSource}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Job Application URL</label>
            <input
              type="text"
              className="form-control"
              id="jobLinkInput"
              placeholder="URL"
              name="jobLink"
              value={props.jobLink}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditJobInfo;