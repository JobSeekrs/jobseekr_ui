import React, { Component } from 'react';

class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobNotes: this.props.jobDetailsAdditional.job_notes,
      jobNotesCharLeft: 255 - this.props.jobDetailsAdditional.job_notes.length,
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.jobNotesChar = this.jobNotesChar.bind(this);
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
        <button type="Submit" className="btn btn-primary">Save</button>
      </div>
    );
  }
};

export default Notes;
