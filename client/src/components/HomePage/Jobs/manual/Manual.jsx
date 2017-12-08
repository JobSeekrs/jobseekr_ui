import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Job from './Job';
import Company from './Company';
import Contact from './Contact';

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
      jobDescriptionCharLeft: 255,
      jobSource: '',
      jobLink: '',
      jobNotes: '',
      jobNotesCharLeft: 255,
      companyName: '',
      companyPhone: '',
      companyAddress1: '',
      companyAddress2: '',
      companyCity: '',
      companyState: '',
      companyZip: '',
      companyDescription: '',
      companyDescriptionCharLeft: 255,
      contactFirstName: '',
      contactLastName: '',
      contactTitle: '',
      contactEmail: '',
      contactPhone: '',
      maxCount: 255,
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.jobDescriptionChar = this.jobDescriptionChar.bind(this);
    this.jobNotesChar = this.jobNotesChar.bind(this);
    this.companyDescriptionChar = this.companyDescriptionChar.bind(this);
    this.jobFormSubmit = this.jobFormSubmit.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });

    if (name === 'jobDescription') {
      this.jobDescriptionChar(e);
    }

    if (name === 'jobNotes') {
      this.jobNotesChar(e);
    }

    if (name === 'companyDescription') {
      this.companyDescriptionChar(e);
    }

    console.log(this.state);
  }

  jobDescriptionChar(e) {
    const charCount = e.target.value.length;
    const maxCount = this.state.maxCount;
    const charLength = maxCount - charCount;

    this.setState({
      jobDescriptionCharLeft: charLength,
    });
  }

  jobNotesChar(e) {
    const charCount = e.target.value.length;
    const maxCount = this.state.maxCount;
    const charLength = maxCount - charCount;

    this.setState({
      jobNotesCharLeft: charLength,
    });
  }

  companyDescriptionChar(e) {
    const charCount = e.target.value.length;
    const maxCount = this.state.maxCount;
    const charLength = maxCount - charCount;

    this.setState({
      companyDescriptionCharLeft: charLength,
    });
  }

  handleChange(date) {
    this.setState({
      jobDeadline: date,
    });
    console.log(this.state.jobDeadline._d)
  }

  jobFormSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3002/company', {
      companyName: this.state.companyName,
      companyDescription: this.state.companyDescription,
      companyPhone: this.state.companyPhone,
      companyAddress1: this.state.companyAddress1,
      companyAddress2: this.state.companyAddress2,
      companyCity: this.state.companyCity,
      companyState: this.state.companyState,
      companyZip: this.state.companyZip,
    }).then(() => {
      console.log('company info posted!');
    });

    axios.post('http://localhost:3002/job', {
      jobTitle: this.state.jobTitle,
      jobDescription: this.state.jobDescription,
      jobNotes: this.state.jobNotes,
      jobSource: this.state.jobSource,
      jobStatus: this.state.jobStatus,
      jobPriority: parseInt(this.state.jobPriority, 10),
      jobDeadline: this.state.jobDeadline._d,
      jobLink: this.state.jobLink,
    }).then(() => {
      console.log('job info posted!');
    });

    axios.post('http://localhost:3002/contact', {
      contactFirstName: this.state.contactFirstName,
      contactLastName: this.state.contactLastName,
      contactTitle: this.state.contactTitle,
      contactEmail: this.state.contactEmail,
      contactPhone: this.state.contactPhone,
    }).then(() => {
      console.log('contact info posted!');
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.jobFormSubmit}>
        <div id="accordion" role="tablist" aria-multiselectable="true">
          <div className="card">
            <div className="card-header" role="tab" id="headingOne">
              <h3
                className="mb-0"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Job
              </h3>
            </div>
            <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
              <div className="card-block">
                <Job
                  jobTitle={this.state.jobTitle}
                  jobDeadline={this.state.jobDeadline}
                  jobStatus={this.state.jobStatus}
                  jobPriority={this.state.jobPriority}
                  jobDescription={this.state.jobDescription}
                  jobDescriptionCharLeft={this.state.jobDescriptionCharLeft}
                  jobSource={this.state.jobSource}
                  jobLink={this.state.jobLink}
                  jobNotes={this.state.jobNotes}
                  jobNotesCharLeft={this.state.jobNotesCharLeft}
                  handleUserInput={this.handleUserInput}
                  handleChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" role="tab" id="headingTwo">
              <h3
                className="mb-0 collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Company
              </h3>
            </div>
            <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div className="card-block">
                <Company
                  companyName={this.state.companyName}
                  companyPhone={this.state.companyPhone}
                  companyAddress1={this.state.companyAddress1}
                  companyAddress2={this.state.companyAddress2}
                  companyCity={this.state.companyCity}
                  companyState={this.state.companyState}
                  companyZip={this.state.companyZip}
                  companyDescription={this.state.companyDescription}
                  companyDescriptionCharLeft={this.state.companyDescriptionCharLeft}
                  handleUserInput={this.handleUserInput}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" role="tab" id="headingThree">
              <h3
                className="mb-0 collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Contact
              </h3>
            </div>
            <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
              <div className="card-block">
                <Contact
                  contactFirstName={this.state.contactFirstName}
                  contactLastName={this.state.contactLastName}
                  contactTitle={this.state.contactTitle}
                  contactEmail={this.state.contactEmail}
                  contactPhone={this.state.contactPhone}
                  handleUserInput={this.handleUserInput}
                />
              </div>
            </div>
          </div>
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
          <button
            type="submit"
            className="btn btn-primary"
          >Submit
          </button>
        </form>
        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Successfully Added Job Lead!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Add Another Job Lead</button>
                <button type="button" className="btn btn-primary">Go to Dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Manual;
