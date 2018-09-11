import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../../containers/HomePage';

it('should render HomePage component', () => {
  global.localStorage = {
    jwtToken: 'token'
  };
  const wrapper = shallow(<HomePage history={{}} />);
  expect(wrapper).toMatchSnapshot();
});
