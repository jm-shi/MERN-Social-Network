import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/Navbar';

it('should render Navbar', () => {
  const wrapper = shallow(<Navbar logoutUser={jest.fn()} user={{}} />);
  expect(wrapper).toMatchSnapshot();
});
