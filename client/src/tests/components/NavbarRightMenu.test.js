import React from 'react';
import { shallow } from 'enzyme';
import NavbarRightMenu from '../../components/NavbarRightMenu';

it('should render NavbarLeftMenu', () => {
  const wrapper = shallow(<NavbarRightMenu logoutUser={jest.fn()} user={{}} />);
  expect(wrapper).toMatchSnapshot();
});
