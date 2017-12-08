import React from 'react';

const willApply = () => (
  <div className="container">
    <h2>Will Apply</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Job Title</th>
          <th>Job Link</th>
          <th>Job Deadline</th>
          <th>Expanded Job Details</th>
          <th>Personal Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Google</td>
          <td>Full-Stack Developer</td>
          <td>url to job</td>
          <td>10/10/25</td>
          <td>Details View</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default willApply;
