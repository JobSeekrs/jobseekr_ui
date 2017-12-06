import React, { Component } from 'react';

class Manual extends Component {
  constructor() {
    super();

    this.jobFormSubmit = this.jobFormSubmit.bind(this);
  }

  jobFormSubmit(e) {
    e.preventDefault();
    const inputData = {};

    for (const ref in this.refs) {
      if (ref === 'status' || ref === 'priority') {
        inputData[ref] = this.refs[ref].value.length;
      } else {
        inputData[ref] = this.refs[ref].value;
      }
    }
    e.target.reset();

    // axios post to api repo and to DB
  }

  render() {
    return (
      <div className="container">
        <form>
          <h3>Job</h3>
          <div className="form-group">
            <label htmlFor="titleInput">Title</label>
            <input type="text" className="form-control" id="jobTitleInput" placeholder="Title" />
          </div>
          <div className="form-group">
            <label htmlFor="deadlineInput">Deadline</label>
            <input type="text" className="form-control" id="jobDeadlineInput" placeholder="Deadline" />
          </div>
          <div className="form-group">
            <label htmlFor="statusSelect">Current Status</label>
            <select className="form-control" id="jobStatusSelect">
              <option>Will Apply</option>
              <option>Applied</option>
              <option>Follow Up</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priorty: 1 being dream job</label>
            <select className="form-control" id="jobPriority">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="jobDescription">Description</label>
            <textarea className="form-control" id="notesInput" rows="3" placeholder="Job description" />
          </div>
          <div className="form-group">
            <label htmlFor="sourceInput">Source</label>
            <input type="text" className="form-control" id="jobSourceInput" placeholder="Where did you hear about this job?" />
          </div>
          <div className="form-group">
            <label htmlFor="linkInput">Link</label>
            <input type="text" className="form-control" id="jobLinkInput" placeholder="URL to job application" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleTextarea">Notes</label>
            <textarea className="form-control" id="notesInput" rows="3" placeholder="Notes for this job" />
          </div>

          <h3>Company</h3>
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input type="text" className="form-control" id="companyNameInput" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneInput">Phone Number</label>
            <input type="text" className="form-control" id="companyPhoneInput" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <label htmlFor="addres1Input">Address 1</label>
            <input type="text" className="form-control" id="companyAddress1Input" placeholder="Adress 1" />
          </div>
          <div className="form-group">
            <label htmlFor="address2Input">Address 2</label>
            <input type="text" className="form-control" id="companyAddress2Input" placeholder="Address 2" />
          </div>
          <div className="form-group">
            <label htmlFor="cityInput">City</label>
            <input type="text" className="form-control" id="companyCityInput" placeholder="City" />
          </div>
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input type="text" className="form-control" id="companyNameInput" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="zipInput">ZIP</label>
            <input type="text" className="form-control" id="companyZipInput" placeholder="ZIP" />
          </div>  

          <h3>Contact</h3>
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input type="text" className="form-control" id="contactNameInput" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="titleInput">Title</label>
            <input type="text" className="form-control" id="contactTitleInput" placeholder="Title" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneInput">Phone</label>
            <input type="text" className="form-control" id="contactPhoneInput" placeholder="Phone" />
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input type="text" className="form-control" id="contactEmailInput" placeholder="Email" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputFile">Upload File</label>
            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
            <small id="fileHelp" className="form-text text-muted">Upload the resume and cover letter you used or plan to use for this job.</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Manual;
