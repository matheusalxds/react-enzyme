import React from 'react';
import { shallow } from 'enzyme';
import SimpleTable from '../SimpleTable';
import data from '../__mocks__/_mock.table';

const aux = ['_id', 'name', 'unitName'];

describe('SimpleTable', () => {
  it('Should render table correctly', () => {
    const wrapper = shallow(<SimpleTable data={data} cols={aux}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('Should not render table without data', () => {
    const wrapper = shallow(<SimpleTable />);
    expect(wrapper.props().data).toBeUndefined();
  });
});
