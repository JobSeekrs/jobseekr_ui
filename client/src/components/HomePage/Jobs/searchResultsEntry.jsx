import React from 'react';
import { Link } from 'react-router-dom';

class searchResultsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails () {
    this.props.showJobDetails(this.props.job);
  }

  render() {
    return (
      <div className="container">
        <div>
          <Link to="/search/details" href="/search/details">
            <h3 onClick={this.showDetails}>
              {this.props.job.title}
            </h3>
          </Link>
          <h6>{this.props.job.company}</h6>
          <h6>{this.props.job.location}</h6>
          <h6>{this.props.job.company_url}</h6>
        </div>
      </div>
    );
  }
};

export default searchResultsEntry;