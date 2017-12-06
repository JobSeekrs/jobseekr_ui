import React from 'react';

class searchResults extends React.Component {
  render() {
    return (
      <div className="container">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.clicked}>Click this to test github api</button>
        {this.props.searchResults.map((job, i) => (
          <div>
            <h4 key={i}>{job.title}</h4>
            <h6 key={i}>{job.company}</h6>
            <h6 key={i}>{job.location}</h6>
            <h6 key={i}>{job.company_url}</h6>
          </div>
        ))}
      </div>
    );
  }
}

export default searchResults;