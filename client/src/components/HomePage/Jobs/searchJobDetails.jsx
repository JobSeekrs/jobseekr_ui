import React from 'react';
import { Link } from 'react-router-dom';

class searchJobDetails extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  };

  render() {
    return (
      <div>
        <input type="text" value={this.props.value} onChange={this.props.handleChange} onKeyPress={this.props.handleKeyPressDetails}/>
        <Link to="/search" href="/search">
          <button onClick={this.props.clicked}>Click this to test github api</button>
        </Link>
        <Link to="/search" href="/search">Back to Results</Link>
        <div>
          <h1>{this.props.jobDetails.title}</h1>
          <h4>{this.props.jobDetails.company}</h4>
          <h4>{this.props.jobDetails.company_url}</h4>
          <h4>{this.props.jobDetails.location}</h4>
          <h4>{this.props.jobDetails.description.replace(/<(?:.|\n)*?>/gm, '')}</h4>
          <h4>{this.props.jobDetails.how_to_apply.replace(/<(?:.|\n)*?>/gm, '')}</h4>
        </div>
      </div>
    )
  }
}
export default searchJobDetails;