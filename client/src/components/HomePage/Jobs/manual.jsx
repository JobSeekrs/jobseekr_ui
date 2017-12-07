import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Manual extends Component {
  constructor() {
    super();
    this.state = {
      jobTitle: '',
      jobDeadline: moment(),
      jobStatus: 'Will Apply',
      jobPriority: '1',
      jobDescription: '',
      jobSource: '',
      jobLink: '',
      jobNotes: '',
      companyName: '',
      companyPhone: '',
      companyAddress1: '',
      companyAddress2: '',
      companyCity: '',
      companyState: '',
      companyZip: '',
      contactName: '',
      contactTitle: '',
      contactEmail: '',
      contactPhone: '',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.jobFormSubmit = this.jobFormSubmit.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  handleChange(date) {
    this.setState({
      jobDeadline: date,
    });
    console.log(this.state.jobDeadline._d)
  }

  jobFormSubmit(e) {
    e.preventDefault();
    // axios post to api repo and to DB
  }

  render() {
    return (
      <div className="container">
        <form>
          <h3>Job</h3>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              id="jobTitleInput"
              placeholder="Title"
              name="jobTitle"
              value={this.state.jobTitle}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>Deadline</label>
            <DatePicker
              id="jobDeadlineSelect"
              selected={this.state.jobDeadline}
              onChange={this.handleChange}
              dateFormat="LL"
            />
          </div>
          <div className="form-group">
            <label>Current Status</label>
            <select className="form-control" id="jobStatusSelect" name="jobStatus" onChange={this.handleUserInput}>
              <option value="Will Apply">Will Apply</option>
              <option value="Applied">Applied</option>
              <option value="Follow Up">Follow Up</option>
            </select>
          </div>
          <div className="form-group">
            <label>Priorty: 1 being dream job</label>
            <select className="form-control" id="jobPrioritySelect" name="jobPriority" onChange={this.handleUserInput}>
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
              placeholder="Job description"
              name="jobDescription"
              value={this.state.jobDescription}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>Source</label>
            <input
              type="text"
              className="form-control"
              id="jobSourceInput"
              placeholder="Where did you hear about this job?"
              name="jobSource"
              value={this.state.jobSource}
              onChange={this.handleUserInput}
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
              value={this.state.jobLink}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea
              className="form-control"
              id="notesInput"
              rows="3"
              placeholder="Notes for this job"
              name="jobNotes"
              value={this.state.jobNotes}
              onChange={this.handleUserInput}
            />
          </div>

          <h3>Company</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="companyNameInput"
              placeholder="Name"
              name="companyName"
              value={this.state.companyName}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="companyPhoneInput"
              placeholder="Phone Number"
              name="companyPhone"
              value={this.state.companyPhone}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>Address 1</label>
            <input
              type="text"
              className="form-control"
              id="companyAddress1Input"
              placeholder="Adress 1"
              name="companyAddress1"
              value={this.state.companyAddress1}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input
              type="text"
              className="form-control"
              id="companyAddress2Input"
              placeholder="Address 2"
              name="companyAddress2"
              value={this.state.companyAddress2}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              id="companyCityInput"
              placeholder="City"
              name="companyCity"
              value={this.state.companyCity}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              className="form-control"
              id="companyStateInput"
              placeholder="State"
              name="companyState"
              value={this.state.companyState}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>ZIP</label>
            <input
              type="text"
              className="form-control"
              id="companyZipInput"
              placeholder="ZIP"
              name="companyZip"
              value={this.state.companyZip}
              onChange={this.handleUserInput}
            />
          </div>
          <h3>Contact</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="contactNameInput"
              placeholder="Name"
              name="contactName"
              value={this.state.contactName}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              id="contactTitleInput"
              placeholder="Title"
              name="contactTitle"
              value={this.state.contactTitle}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              id="contactPhoneInput"
              placeholder="Phone"
              name="contactPhone"
              value={this.state.contactPhone}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              id="contactEmailInput"
              placeholder="Email"
              name="contactEmail"
              value={this.state.contactEmail}
              onChange={this.handleUserInput}
            />
          </div>

          <div className="form-group">
            <label>Upload File</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleInputFile"
              aria-describedby="fileHelp"
            />
            <small
              id="fileHelp"
              className="form-text text-muted"
            >Upload the resume and cover letter you used or plan to use for this job.
            </small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Manual;
