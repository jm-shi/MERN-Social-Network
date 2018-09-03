import React from 'react';
import { shallow } from 'enzyme';
import { DeleteButton } from '../../containers/DeleteButton';

it('should render DeleteButton component', () => {
  const wrapper = shallow(<DeleteButton _id="1" removePost={jest.fn()} />);
  expect(wrapper).toMatchSnapshot();
});
