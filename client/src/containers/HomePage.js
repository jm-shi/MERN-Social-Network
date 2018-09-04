import React from 'react';

import Navbar from '../components/Navbar';
import CreatePost from './CreatePost';
import PostFeed from './PostFeed';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <CreatePost />
        <PostFeed />
      </div>
    );
  }
}

export default HomePage;
