import React from 'react';
import axios from 'axios';
import Checkbox from 'rc-checkbox';
import { Link } from 'react-router-dom';

class searchResultsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.showDetails = this.showDetails.bind(this);
    this.saveJob = this.saveJob.bind(this);
  }

  showDetails() {
    this.props.showJobDetails(this.props.job);
  }

  saveJob() {
    const context = this;
    this.props.saveOrDeleteSearchedJobs(context.props.job, context.props.savedSearchedJobs);
  }


  // render() {
  //   return (
  //     <div className="container">
  //       {console.log('this is job', typeof this.props.job.title)}
  //       <div>
  //         <Link to="/search/details" href="/search/details">
  //           <h3 onClick={this.showDetails}>
  //             {this.props.job.title}
  //           </h3>
  //         </Link>
  //         <h6>{this.props.job.company}</h6>
  //         <h6>{this.props.job.location}</h6>
  //         <h6>{this.props.job.company_url}</h6>
  //         <Checkbox  checked={this.props.job.checkbox === undefined ? (0) : this.props.job.checkbox} onChange={this.saveOrDeleteJob} />
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="container">
        {console.log('this is job', typeof this.props.job.title)}
        <div>
          <Link to="/search/details" href="/search/details">
            <h3 onClick={this.showDetails}>
              {this.props.job.title}
            </h3>
          </Link>
          <h6>{this.props.job.company.name}</h6>
          <h6>{this.props.job.company.location.name}</h6>
          <h6>{this.props.job.company.url}</h6>
          <Checkbox  checked={this.props.job.checkbox === undefined ? (0) : this.props.job.checkbox} onChange={this.saveOrDeleteJob} />
        </div>
      </div> 
    )
  }
}

export default searchResultsEntry