import React from 'react';

const willApply = () => (
  <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Job Title</th>
          <th>Job Link</th>
          <th>Job Deadline</th>
          <th>Job Details</th>
          <th>Personal Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Google</td>
          <td>Full-Stack Developer</td>
          <td>url to job</td>
          <td>10/10/25</td>
          <td>Expanded Details View</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default willApply;
