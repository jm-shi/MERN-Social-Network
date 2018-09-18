import React from 'react';
import { shallow } from 'enzyme';
import EditPost from '../../containers/EditPost';

it('should render EditPost component', () => {
  const wrapper = shallow(<EditPost />);
  expect(wrapper).toMatchSnapshot();
});
