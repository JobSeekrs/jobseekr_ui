import React from 'react';

const applied = (props) => (
  <div className="container">
    <h2>Applied</h2>
    <table className="table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Job Title</th>
          <th>Job Link</th>
          <th>Personal Rating</th>
          <th>Job Status</th>
          <th>Expanded Job Details</th>
          <th>Deadline</th>
        </tr>
      </thead>
      <tbody>
      {props.info.map((job) => { if(job.status === "Applied"){
        return (
        <tr key={job.id}>
            <td>{job.companyId}</td>
            <td>{job.name}</td>
            <td> <a href={'http://'+job.link !== 'http://' ? 'http://'+job.link : ""} target="_blank">Link</a></td>
            <td>{job.priority}</td>
            <td>{job.status}</td>
            <td>Job expanded link</td>
            <td>{job.deadline}</td>
        </tr>)}
          })
        }
      </tbody>
    </table>
  </div>
);

export default applied;
