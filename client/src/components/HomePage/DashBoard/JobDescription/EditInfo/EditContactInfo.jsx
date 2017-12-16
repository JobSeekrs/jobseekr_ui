import React, { Component } from 'react';

const EditContactInfo = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              id="contactNameInput"
              placeholder="First Name"
              name="contactFirstName"
              value={props.contactFirstName}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              id="contactNameInput"
              placeholder="Last Name"
              name="contactLastName"
              value={props.contactLastName}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              id="contactTitleInput"
              placeholder="Title"
              name="contactTitle"
              value={props.contactTitle}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              id="contactPhoneInput"
              placeholder="Phone"
              name="contactPhone"
              value={props.contactPhone}
              onChange={props.handleUserInput}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          id="contactEmailInput"
          placeholder="Email"
          name="contactEmail"
          value={props.contactEmail}
          onChange={props.handleUserInput}
        />
      </div>
    </div>
  );
}

export default EditContactInfo;