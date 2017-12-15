import React from 'react';

const notes = () => {
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
      />
      <button type="Submit">Save</button>
    </div>
  );
};

export default notes;
