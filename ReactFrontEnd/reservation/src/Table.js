
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Table extends React.Component {

  
  render() {

    return (
      <BootstrapTable data={ this.props.list }  options={ { noDataText: 'This is custom text for empty data' } }>
        <TableHeaderColumn dataField='Date' isKey>Date</TableHeaderColumn>
        <TableHeaderColumn dataField='Time'>Time</TableHeaderColumn>
        <TableHeaderColumn dataField='Description'>Description</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Table;