import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../../components/PostList';

it('should render PostList', () => {
  const wrapper = shallow(
    <PostList
      deletePost={jest.fn()}
      updatePost={jest.fn()}
      user={{ userId: 'abc123' }}
      getPosts={jest.fn(() => Promise.resolve('posts'))}
      getFollowing={jest.fn(() => Promise.resolve('following'))}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
