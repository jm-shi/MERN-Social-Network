import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../../components/PostList';

it('should render PostList', () => {
  const wrapper = shallow(
    <PostList
      deletePost={jest.fn()}
      updatePost={jest.fn()}
      getPosts={jest.fn(() => Promise.resolve('posts'))}
      getFollowing={jest.fn(() => Promise.resolve('following'))}
      user={{ userId: 'abc123' }}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
