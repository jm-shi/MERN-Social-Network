import React from 'react';
import { shallow } from 'enzyme';
import Post from '../../components/Post';

it('should render Post', () => {
  const wrapper = shallow(
    <Post
      _id="1"
      addComment={jest.fn()}
      author="testAuthor"
      authorId="123abc"
      avatarColor={7}
      comments={[]}
      deleteComment={jest.fn()}
      deletePost={jest.fn()}
      editComment={jest.fn()}
      editPost={jest.fn()}
      getUser={jest.fn()}
      likers={[]}
      likesCount={0}
      signedInUserId="123abcd"
      text="testText"
      timestamp={12345}
      updatePostLikes={jest.fn()}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
