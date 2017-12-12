import React from 'react';
import { Link } from 'react-router-dom';

class searchJobDetails extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  };

  saveOrDeleteJob() {
    if (this.props.jobDetails.checked === false || this.props.jobDetails.checked === undefined) {
      this.props.saveOrDeleteJob(this.props.jobDetails, false, 1);
      this.setState({
        checked: true
      })
    } else {
      this.props.saveOrDeleteJob(this.props.jobDetails, true, 0);
      this.setState({
        checked : false
      })
    }
  }

  // render() {
  //   return (
  //     <div>
  //       <input type="text" value={this.props.value} onChange={this.props.handleChange} onKeyPress={this.props.handleKeyPressDetails}/>
  //       <Link to="/search" href="/search">
  //         <button onClick={this.props.clicked}>Click this to test github api</button>
  //       </Link>
  //       <Link to="/search" href="/search">Back to Results</Link>
  //       <Checkbox onChange={this.saveOrDeleteJob}/>
  //       <div>
  //         <h1>{this.props.jobDetails.title}</h1>
  //         <h4>{this.props.jobDetails.company}</h4>
  //         <h4>{this.props.jobDetails.company_url}</h4>
  //         <h4>{this.props.jobDetails.location}</h4>
  //         <h4>{this.props.jobDetails.description.replace(/<(?:.|\n)*?>/gm, '')}</h4>
  //         <h4>{this.props.jobDetails.how_to_apply.replace(/<(?:.|\n)*?>/gm, '')}</h4>
  //       </div>
  //     </div>
  //   )
  // }
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
          <h4>{this.props.jobDetails.company.name}</h4>
          <h4>{this.props.jobDetails.company.url}</h4>
          <h4>{this.props.jobDetails.company.location.name}</h4>
          <h4>{this.props.jobDetails.description.replace(/<(?:.|\n)*?>/gm, '')}</h4>
          <h4>Apply Here: {this.props.jobDetails.apply_url}</h4>
        </div>
      </div>
    )
  }

}
export default searchJobDetails;