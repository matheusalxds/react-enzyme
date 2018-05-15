import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('should render correctly with name', () => {
    const tree = shallow(
    <Button name='button test'/>
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render correctly but without name', () => {
    const tree = shallow(
    <Button name=''/>
    );
    expect(tree).toMatchSnapshot();
  });
});
