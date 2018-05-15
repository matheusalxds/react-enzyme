import React, {Component} from 'react';

class SimpleTable extends Component {
  renderTableRow = (row, index) => <tr key={index}>{this.renderTableCols(row)}</tr>;
  renderTableCols = (row) => this.props.cols.map((col, index) => this.renderCol(col, row, index));
  renderCol = (col, row, index) => <td key={`key - ${index} - ${row[col]}`}>{row[col]}</td>;
  renderTableHeader = () => <tr>{this.props.cols.map((item, index) => {
    return <th key={`key - ${index} - ${item}`}>{item}</th>
  })}</tr>;

  render() {
    const {data} = this.props;
    return data ? (
    <table>
      <thead>
      {this.renderTableHeader()}
      </thead>
      <tbody>
      {data.map((item, index) => this.renderTableRow(item, index))}
      </tbody>
    </table>
    ) : null;
  }
}

export default SimpleTable;
