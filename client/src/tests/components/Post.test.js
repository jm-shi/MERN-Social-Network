import React from 'react';
import { shallow } from 'enzyme';
import Post from '../../components/Post';

it('should render Post', () => {
  const wrapper = shallow(<Post _id="1" text="test" />);
  expect(wrapper).toMatchSnapshot();
});
