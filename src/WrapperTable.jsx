import React, {Component} from 'react';
import SimpleTable from './SimpleTable';

import data from './__mocks__/_mock.table';
const aux = ['_id', 'name', 'unitName'];


class WrapperTable extends Component {
  render() {
    return (<SimpleTable data={data} cols={aux}/>
    );
  }
}

export default WrapperTable;
