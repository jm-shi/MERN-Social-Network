import React from 'react';
import { shallow } from 'enzyme';
import UpdatePost from '../../containers/UpdatePost';

it('should render UpdatePost component', () => {
  const wrapper = shallow(<UpdatePost />);
  expect(wrapper).toMatchSnapshot();
});
