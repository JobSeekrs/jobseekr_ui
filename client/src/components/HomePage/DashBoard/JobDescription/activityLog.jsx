import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ActivityLogTable from './activityLogTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ActivityLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      value: '',
      option: 'Phone Call',
      text: '',
    }
    this.data = [
      {field: this.state.value},
      {field: this.state.option},
      {field: this.state.date._d},
      {field: this.state.date},
      {field: 'edit'},
      {field: 'discard'}
    ];

    this.header = [{
      name: 'Activity Title',
    }, {
      name: 'Type',
    }, {
      name: 'Time',
    }, {
      name: 'Date', 
    }, {
      name: 'Edit',
    }, {
      name: 'Discard',
    }];
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
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
      option: event.target.option
    })
  }

  handleTextChange (event) {
    this.setState({
      text: event.target.text
    })
  }

  render() {
    console.log('props', this);
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
        <select option={this.state.option} onChange={this.handleTypeChange}>
          <option option='Phone Call'>Phone Call</option>
          <option option='Interview'>Interview</option>
          <option option='Coding Challenge'>Coding Challenge</option>
        </select>
        <h4>Activity Description</h4>
        <textarea text={this.state.text} onChange={this.handleTextChange}/>
        <button>Submit</button>
        <button>Discard</button>
        <h4>Activity Table</h4>
        <MuiThemeProvider>
          <ActivityLogTable data={this.data} header={this.header}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ActivityLog;
