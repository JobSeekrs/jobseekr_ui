import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Job from './Job';
import Company from './Company';
import Contact from './Contact';

import './manual.css';
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
    this.removeModal = this.removeModal.bind(this);
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

  removeModal() {
    document.getElementbyClassName('modal-backdrop fade show').remove();
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
    }).then((res) => {
      console.log('company info posted!', res.data.insertId);
      
      axios.post('http://localhost:3002/job', {
        companyId: res.data.insertId,
        jobTitle: this.state.jobTitle,
        jobDescription: this.state.jobDescription,
        jobNotes: this.state.jobNotes,
        jobSource: this.state.jobSource,
        jobStatus: this.state.jobStatus,
        jobPriority: parseInt(this.state.jobPriority, 10),
        jobDeadline: this.state.jobDeadline._d,
        jobLink: this.state.jobLink,
      }).then((res) => {
        console.log('job info posted!', res.data);

        axios.post('http://localhost:3002/event', {
          jobId: res.data.insertId,
          eventName: 'creation',
          eventType: 'Entered',
        })
      });
  
      axios.post('http://localhost:3002/contact', {
        companyId: res.data.insertId,
        contactFirstName: this.state.contactFirstName,
        contactLastName: this.state.contactLastName,
        contactTitle: this.state.contactTitle,
        contactEmail: this.state.contactEmail,
        contactPhone: this.state.contactPhone,
      }).then((res) => {
        console.log('contact info posted!', res.data);
      });
    });

  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.jobFormSubmit}>
          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="card">
              <div
                role="tab"
                id="headingOne"
                className="mb-0"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h3 className="card-header">Job</h3>
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
              <div
                role="tab"
                id="headingTwo"
                className="mb-0 collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h3 className="card-header">Company</h3>
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
              <div
                role="tab"
                id="headingThree"
                className="mb-0 collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h3 className="card-header">Contact</h3>
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
            type="Submit"
            className="btn btn-job-form"
            data-toggle="modal"
            data-target="#myModal"
          >Submit
          </button>
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">SUCCESS!</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <p>Successfully Added Job Lead!</p>
                </div>
                <div className="modal-footer">
                  <Link to="/enter-a-job" href="/enter-a-job" className="btn btn-secondary" onClick={this.removeModal}>
                    Add Another Job Lead
                  </Link>
                  <Link to="/home" href="/home" className="btn btn-job-form" onClick={this.removeModal}>
                    Go to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Manual;
