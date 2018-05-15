import React, {Component} from 'react';
import Button3 from './Button3';
import Button from './Button';

import data from './__mocks__/_mock.table';
const aux = ['_id', 'name', 'unitName'];


class WrapperTable extends Component {
  handleClick = () => {
    console.log('clicked');
  };
  render() {
    return (
    <div>
      <Button3 data={data} cols={aux}/>
      <Button
        label={'Testing'}
        onClick={() => this.handleClick()}
        btnStyle={'danger'}
      />
    </div>
    );
  }
}

export default WrapperTable;
