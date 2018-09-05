import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import CreatePost from './CreatePost';
import PostFeed from './PostFeed';

class HomePage extends Component {
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
