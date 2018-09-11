import React from 'react';
import { shallow } from 'enzyme';
import SignupPage from '../../containers/SignupPage';

it('should render SignupPage component', () => {
  const wrapper = shallow(<SignupPage />);
  expect(wrapper).toMatchSnapshot();
});
