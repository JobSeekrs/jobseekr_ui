import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import EditJob from './EditJobInfo';
import EditCompany from './EditCompanyInfo';
import EditContact from './EditContactInfo';

class EditInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobTitle: this.props.jobDetails.job_title_name,
      jobDeadline: moment(this.props.jobDetails.deadline.split('T')[0]),
      jobStatus: this.props.jobDetails.status,
      jobPriority: this.props.jobDetails.rating,
      jobDescription: '',
      jobDescriptionCharLeft: 255,
      jobSource: '',
      jobLink: this.props.jobDetails.url,
      jobNotes: '',
      jobNotesCharLeft: 255,
      companyName: this.props.jobDetails.company_name,
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
      jobDescriptionCharLeft: 255,
      jobNotesCharLeft: 255,
      companyDescriptionCharLeft: 255,
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.jobDescriptionChar = this.jobDescriptionChar.bind(this);
    this.jobNotesChar = this.jobNotesChar.bind(this);
    this.companyDescriptionChar = this.companyDescriptionChar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });

    console.log(this.state)

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
    const charLength = 255 - charCount;

    this.setState({
      jobDescriptionCharLeft: charLength,
    });
  }

  jobNotesChar(e) {
    const charCount = e.target.value.length;
    const charLength = 255 - charCount;

    this.setState({
      jobNotesCharLeft: charLength,
    });
  }

  companyDescriptionChar(e) {
    const charCount = e.target.value.length;
    const charLength = 255 - charCount;

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

  render() {
    return (
      <div>
        <EditJob
          jobTitle={this.state.jobTitle}
          jobDeadline={this.state.jobDeadline}
          jobDescription={this.state.jobDescription}
          jobSource={this.state.jobSource}
          jobStatus={this.state.jobStatus}
          jobPriority={this.state.jobPriority}
          jobLink={this.state.jobLink}
          jobDescriptionCharLeft={this.state.jobDescriptionCharLeft}
          jobNotesCharLeft={this.state.jobNotesCharLeft}
          handleUserInput={this.handleUserInput}
          handleChange={this.handleChange}
          jobDescriptionChar={this.jobDescriptionChar}
          jobNotesChar={this.jobNotesChar}
        />
        <EditCompany
          companyName={this.state.companyName}
          companyDescriptionCharLeft={this.state.companyDescriptionCharLeft}
          handleUserInput={this.handleUserInput}
          companyDescriptionChar={this.companyDescriptionCharLeft}
        />
        <EditContact
          handleUserInput={this.handleUserInput}
        />
        <button className="btn btn-primary">Save</button>
        <Link to="/job-detail" href="/job-detail" className="btn btn-primary">
          Cancel
        </Link>
      </div>
    );
  }
}

export default EditInfo;