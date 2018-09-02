import React, { Component } from 'react';
import { connect } from 'react-redux';

// import PropTypes from 'prop-types';

class Feed extends Component {
  componentDidMount() {}

  render() {
    return <div>Feed</div>;
  }
}

const mapStateToProps = (state) => {
  const { text } = state.postsReducer;
  return {
    text
  };
};

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
