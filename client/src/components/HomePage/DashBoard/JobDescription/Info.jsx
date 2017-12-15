import React from 'react';

const Info = () => {
  return (
    <div>
      <button>Edit</button>
      <h4>Job Info</h4>
        <div>Job Title</div>
        <div>Job Deadline</div>
        <div>Status</div>
        <div>Priority</div>
        <div>Description</div>
        <div>Source</div>
        <div>Job App URL</div>
      <h4>Company Info</h4>
        <div>Name</div>
        <div>Address1</div>
        <div>Address2</div>
        <div>City</div>
        <div>State</div>
        <div>ZIP</div>
        <div>Description</div>
      <h4>Contact Info</h4>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Title</div>
        <div>Phone Number</div>
        <div>Email</div>
      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
};

export default Info;
