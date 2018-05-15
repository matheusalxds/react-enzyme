import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';
import sinon from 'sinon';

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('should render correctly with name', () => {
    const wrapper = shallow(<Button label='button test'/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly but without name', () => {
    const wrapper = shallow(<Button label=''/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render static HTML', () => {
    const wrapper = shallow(<Button label='Label'/>);
    expect(wrapper.text()).toEqual('Label');
  });

  it('simulates onClick event', () => {
    const mockOnClick = sinon.spy();
    let wrapper = shallow(<Button onClick={mockOnClick}/>);
    wrapper.find('button').simulate('click');
    expect(mockOnClick.calledOnce).toEqual(true);
  });

  it('render style danger', () => {
    let wrapper = shallow(<Button btnStyle={'danger'}/>);
    expect(wrapper.find('button').hasClass('danger')).toEqual(true);
  });

  it('render style primary', () => {
    let wrapper = shallow(<Button btnStyle={'primary'}/>);
    expect(wrapper.find('button').hasClass('primary')).toEqual(true);
  });
});
