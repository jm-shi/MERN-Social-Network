import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../../components/PostList';

it('should render PostList', () => {
  const wrapper = shallow(
    <PostList
      addComment={jest.fn()}
      deletePost={jest.fn()}
      editPost={jest.fn()}
      getPosts={jest.fn(() => Promise.resolve('posts'))}
      getFollowing={jest.fn(() => Promise.resolve('following'))}
      getUser={jest.fn()}
      updatePostLikes={jest.fn()}
      user={{ userId: 'abc123' }}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
