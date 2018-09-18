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
      likers={[]}
      likesCount={0}
      signedInUserId="123abcd"
      deletePost={jest.fn()}
      editPost={jest.fn()}
      updatePostLikes={jest.fn()}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
