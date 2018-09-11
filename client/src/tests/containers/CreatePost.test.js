import React from 'react';
import { shallow } from 'enzyme';
import { CreatePost } from '../../containers/CreatePost';

it('should render CreatePost component', () => {
  const wrapper = shallow(
    <CreatePost dispatch={jest.fn()} classes={{}} user={{}} />
  );
  expect(wrapper).toMatchSnapshot();
});
