import React from 'react';
import DatePicker from 'react-datepicker';

const job = (props) => {
  return (
    <div>
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
      <div className="form-group">
        <label>Deadline</label>
        <DatePicker
          id="jobDeadlineSelect"
          selected={props.jobDeadline}
          onChange={props.handleChange}
          dateFormat="LL"
        />
      </div>
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
      <div className="form-group">
        <label>Priorty: 1 being dream job</label>
        <select
          className="form-control"
          id="jobPrioritySelect"
          name="jobPriority"
          onChange={props.handleUserInput}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="form-group">
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
      <div>{props.jobDescriptionCharLeft} characters left</div>
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
      <div className="form-group">
        <label>Link</label>
        <input
          type="text"
          className="form-control"
          id="jobLinkInput"
          placeholder="URL to job application"
          name="jobLink"
          value={props.jobLink}
          onChange={props.handleUserInput}
        />1
      </div>
      <div className="form-group">
        <label>Notes</label>
        <textarea
          className="form-control"
          id="notesInput"
          rows="3"
          maxLength="255"
          placeholder="Notes for this job"
          name="jobNotes"
          value={props.jobNotes}
          onChange={props.handleUserInput}
        />
      </div>
      <div>{props.jobNotesCharLeft} characters left</div>
    </div>
  );
};

export default job;
