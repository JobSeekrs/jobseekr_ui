import React, { Component } from 'react';
import axios from 'axios';

class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobNotes: this.props.jobDetailsAdditional.job_notes,
      jobNotesCharLeft: 255 - this.props.jobDetailsAdditional.job_notes.length,
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.jobNotesChar = this.jobNotesChar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });

    if (name === 'jobNotes') {
      this.jobNotesChar(e);
    }
  }

  jobNotesChar(e) {
    const charCount = e.target.value.length;
    const charLength = 255 - charCount;

    this.setState({
      jobNotesCharLeft: charLength,
    });
  }

  handleSubmit() {
    axios.post('http://localhost:3002/jobDetailsNotes', {
      jobId: this.props.jobDetailsAdditional.jobId,
    })
    
    axios.put('http://localhost:3002/jobDetailsNotes', {
      jobId: this.props.jobDetailsAdditional.jobId,
      jobNotes: this.state.jobNotes
    })
  }

  render() {
    return (
      <div>
        <h4>Job Notes</h4>
        <textarea
          className="form-control"
          id="notesInput"
          rows="10"
          maxLength="255"
          placeholder="Notes for this job"
          name="jobNotes"
          value={this.state.jobNotes}
          onChange={this.handleUserInput}
        />
        <p className="char-count">{this.state.jobNotesCharLeft} characters left</p>
        <button
          type="Submit"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
          onClick={this.handleSubmit}
        >
          Save
        </button>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">SUCCESS!</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <p>Successfully Updated Job Notes!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Notes;
