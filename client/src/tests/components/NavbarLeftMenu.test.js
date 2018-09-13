import React from 'react';
import { shallow } from 'enzyme';
import NavbarLeftMenu from '../../components/NavbarLeftMenu';

it('should render NavbarLeftMenu', () => {
  const wrapper = shallow(<NavbarLeftMenu user={{}} />);
  expect(wrapper).toMatchSnapshot();
});
