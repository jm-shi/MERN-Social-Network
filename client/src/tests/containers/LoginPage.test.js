import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../containers/LoginPage';

it('should render LoginPage component', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});
