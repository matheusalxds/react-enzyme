import React from 'react';
import {shallow} from 'enzyme';
import SimpleTable from '../SimpleTable';

import data from '../__mocks__/_mock.table';

const cols = ['_id', 'name', 'unitName'];

describe('SimpleTable', () => {
  it('Should render table correctly', () => {
    const wrapper = shallow(<SimpleTable data={data} cols={cols}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render table with data and cols correctly', () => {
    const wrapper = shallow(<SimpleTable data={data} cols={cols}/>);
    expect(wrapper.instance().props.data).toBeDefined();
    expect(wrapper.instance().props.cols).toBeDefined();
  });
  it('Should not render table without data and cols', () => {
    const wrapper = shallow(<SimpleTable />);
    expect(wrapper.instance().props.data).toBeUndefined();
    expect(wrapper.instance().props.cols).toBeUndefined();
  });
  it('Should not render table without data', () => {
    const wrapper = shallow(<SimpleTable cols={cols}/>);
    expect(wrapper.instance().props.data).toBeUndefined();
    expect(wrapper.instance().props.cols).toBeDefined();
  });
  it('Should not render table without cols', () => {
    const wrapper = shallow(<SimpleTable data={data}/>);
    expect(wrapper.instance().props.data).toBeDefined();
    expect(wrapper.instance().props.cols).toBeUndefined();
  });
});
