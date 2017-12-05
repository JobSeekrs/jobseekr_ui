import React from 'react';
import axios from 'axios';

class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.clicked = this.clicked.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  clicked() {
    const context = this;
    axios.post('http://localhost:3200/github', {
      searched: context.state.value,
    }).then(function(response) {
      context.props.searchJobs(response.data);
    });
  }

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

export default search;
