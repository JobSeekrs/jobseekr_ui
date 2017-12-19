import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
import ActivityLogTable from '../../../../../containers/activityLogTableContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ActivityLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      value: '',
      option: 'Phone Call',
      reset: true
    }

    this.header = [{
      name: 'Activity Title',
    }, {
      name: 'Type',
    }, {
      name: 'Time',
    }, {
      name: 'Date', 
    }, {
      name: 'Discard',
    }];
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  handleDateChange (date) {
    this.setState({
      date: date
    })
  }

  handleTitleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleTypeChange (event) {
    this.setState({
      option: event.target.value
    })
  }

  addEvent() {
    const context = this;
    const data = {      
      jobId: this.props.jobDetailsAdditional.jobId,
      notes: this.state.text,
      name: this.state.value, 
      type: this.state.option,
      timeStamp: this.state.date
    }
    axios.post('http://localhost:3002/event/activityLogPost', data
    ).then(function(response) {
      axios.post('http://localhost:3002/event/activityLog', {
        jobId: context.props.jobId
      }).then(function(response) {
        context.props.addActivityLog(response.data);
      })
    })
  }

  render() {
    console.log('rerendering')
    return (
      <div className='container'>
        <h4>Inside Activity Log</h4>
        <DatePicker
          className="form-control"
          id="jobDeadlineSelect"
          selected={this.state.date}
          onChange={this.handleDateChange}
          dateFormat="LL"
        />
        <h4>Activity Title</h4>
        <input value={this.state.value} onChange={this.handleTitleChange}/>
        <h4>Activity Type </h4>
        <select value={this.state.option} onChange={this.handleTypeChange}>
          <option value='Phone Call'>Phone Call</option>
          <option value='Interview'>Interview</option>
          <option value='Coding Challenge'>Coding Challenge</option>
        </select>
        <button onClick={this.addEvent}>Submit</button>
        <h4>Activity Table</h4>
        <MuiThemeProvider>
          <ActivityLogTable header={this.header} jobId={this.props.jobDetailsAdditional.jobId} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ActivityLog;
