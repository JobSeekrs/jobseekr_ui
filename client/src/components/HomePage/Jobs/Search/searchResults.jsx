import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchResultsEntry from '../../../../containers/Search/searchJobDetailActionContainer';

class searchResults extends React.Component {
  constructor(props) {
    super(props);
    this.saveJobs = this.saveJobs.bind(this);
    this.removeModal = this.removeModal.bind(this);
  }

  saveJobs() {
    if (this.props.savedSearchedJobs.length === 0) {
      return;
    }
    const context = this;
    axios.post('http://localhost:3002/company/search', {
      jobs: context.props.savedSearchedJobs
    }).then(function(response) {
      console.log('this is respnose', response);
      axios.post('http://localhost:3002/job/search', {
        jobs: context.props.savedSearchedJobs
      }).then(function(response) {
        console.log('this is response 2', response);
        context.props.saveOrDeleteSearchedJobs({checked: "Refresh"}, [])
      })
    })
  };

  removeModal() {
    this.props.searchJobs([]);
    document.getElementbyClassName('modal-backdrop fade show').remove();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.value} onKeyPress={this.props.handleKeyPress} onChange={this.props.handleChange} />
        <button onClick={this.props.clicked}>Search For Jobs</button>
        <button
            onClick={this.saveJobs}
            className="btn btn-job-form"
            data-toggle="modal"
            data-target="#myModal"
          >Submit
        </button>
        <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">SUCCESS!</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <p>Successfully Added Job Lead!</p>
                </div>
                                              <div className="modal-footer">
                  <Link to="/search" href="/enter-a-job" className="btn btn-secondary" data-dismiss="modal">
                    Search for more Jobs
                  </Link>
                  <Link to="/home" href="/home" className="btn btn-job-form" onClick={this.removeModal}>
                    Go to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        <div>
          <div>
            {this.props.error === true ? (
              <h6 className='center'>Could not find anything</h6>
            ) :
              <div>
                {this.props.searchResults.map((job, i) => (
                  <SearchResultsEntry job={job} key={i} saveOrDeleteJob={this.props.saveOrDeleteJob}/>
                ))}
              </div> 
            }
          </div>
        </div>
      </div>
    )
  }
}


export default searchResults;
