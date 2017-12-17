import React from 'react';
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
    super(this);
  }

  // componentWillMount() {
  //   axios.post()
  // }

  render () {
    return (
      <Table>
      <TableHeader>
        <TableRow>
          {this.props.header.map((field, i) => 
            <TableRowColumn>{field.name}</TableRowColumn>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {this.rops.data.map((item, i) => 
          <TableRow>
            <TableRowColumn>
              {console.log('this is item', item.field)}
            </TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>
    )
  }
}

export default ActivityLogTable;