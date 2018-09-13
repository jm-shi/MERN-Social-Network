import React from 'react';
import { shallow } from 'enzyme';
import Post from '../../components/Post';

it('should render Post', () => {
  const wrapper = shallow(
    <Post
      _id="1"
      text="testText"
      timestamp={12345}
      author="testAuthor"
      authorId="123abc"
      avatarColor={7}
      deletePost={jest.fn()}
      updatePost={jest.fn()}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
