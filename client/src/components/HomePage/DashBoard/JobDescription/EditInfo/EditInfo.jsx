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
      // jobDeadline: moment(this.props.jobDetails.deadline.split('T')[0]),
      jobStatus: this.props.jobDetails.status,
      jobPriority: this.props.jobDetails.rating,
      jobDescription: this.props.jobDetailsAdditional.job_description,
      jobSource: this.props.jobDetailsAdditional.job_source,
      jobLink: this.props.jobDetails.url,
      companyName: this.props.jobDetails.company_name,
      companyPhone: this.props.jobDetailsAdditional.company_phone,
      companyAddress1: this.props.jobDetailsAdditional.company_address1,
      companyAddress2: this.props.jobDetailsAdditional.company_address2,
      companyCity: this.props.jobDetailsAdditional.company_city,
      companyState: this.props.jobDetailsAdditional.company_state,
      companyZip: this.props.jobDetailsAdditional.company_zip,
      companyDescription: this.props.jobDetailsAdditional.company_description,
      contactFirstName: this.props.jobDetailsAdditional.contact_first_name,
      contactLastName: this.props.jobDetailsAdditional.contact_last_name,
      contactTitle: this.props.jobDetailsAdditional.contact_title,
      contactEmail: this.props.jobDetailsAdditional.contact_email,
      contactPhone: this.props.jobDetailsAdditional.contact_phone,
      jobDescriptionCharLeft: 255 - this.props.jobDetailsAdditional.job_description.length,
      companyDescriptionCharLeft: 255 - this.props.jobDetailsAdditional.company_description.length,
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.jobDescriptionChar = this.jobDescriptionChar.bind(this);
    this.companyDescriptionChar = this.companyDescriptionChar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.removeModal = this.removeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });

    console.log('changing state:', this.state.jobStatus, this.state.jobPriority, this.state.companyState);
    console.log(this.state)

    if (name === 'jobDescription') {
      this.jobDescriptionChar(e);
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

  // removeModal() {
  //   document.getElementbyClassName('modal-backdrop fade show').remove();
  // }

  handleSubmit() {
    // axios.post('/jobInfo', {
    //   jobId: this.props.jobDetailsAdditional.jobId,
    //   jobNotes: this.state.jobNotes
    // })
    
    // axios.put('/jobInfo', {
    //   jobId: this.props.jobDetailsAdditional.jobId,
    //   jobNotes: this.state.jobNotes
    // })
  }

  render() {
    return (
      <div className="container">
        <form>
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
                  <EditCompany
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
                    companyDescriptionChar={this.companyDescriptionCharLeft}
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
                  <EditContact
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
            {/* <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
              onClick={this.handleSubmit}
            >
              Save
            </button> */}
            <Link to="/job-detail" href="/job-detail" className="btn btn-primary" onClick={this.handleSubmit}>
              Save
            </Link>
            {/* <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">SUCCESS!</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div className="modal-body">
                    <p>Successfully Updated Job Information!</p>
                  </div>
                  <div className="modal-footer">
                    <Link to="/job-detail" href="/job-detail"  className="btn btn-primary" onClick={this.removeModal}>
                      Close
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>     
        </form>
      </div>
    );
  }
}

export default EditInfo;