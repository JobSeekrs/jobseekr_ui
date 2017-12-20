import React from 'react';
import axios from 'axios';
import {
  Table,
  TableBody, 
  TableHeader, 
  TableHeaderColumn,
  TableRow, 
  TableRowColumn,
} from 'material-ui/Table';

class ActivityLogTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      reset: true
    }
  }

  componentWillMount() {
    console.log('hitting')
    const context = this;
    axios.post('http://localhost:3002/event/activityLog', {
      jobId: this.props.jobId
    }).then(function(response) {
      context.props.addActivityLog(response.data);
    })
  }


  render () {
    return (
      <Table>
      <TableHeader>
        <TableRow>
          {this.props.header.map((field, i) => 
            <TableRowColumn i={i}>{field.name}</TableRowColumn>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {this.props.activityLogData.map((item, i) => 
          <TableRow>
            <TableRowColumn i={i}>
              {item.name}
            </TableRowColumn>
            <TableRowColumn i={i}>
              {item.type}
            </TableRowColumn>
            <TableRowColumn i={i}>
              {item.timeStamp.split('T')[0]}
            </TableRowColumn>
            <TableRowColumn i={i}>
              {item.timeStamp.split('T')[1]}
            </TableRowColumn>
            <TableRowColumn i={i}>
              Discard
            </TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
    )
  }
}

export default ActivityLogTable;