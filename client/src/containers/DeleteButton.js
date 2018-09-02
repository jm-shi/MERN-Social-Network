import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deletePost } from '../actions/postsActions';

class DeleteButton extends React.Component {
  render() {
    const { id, removePost } = this.props;
    return (
      <div>
        <button type="button" onClick={() => removePost(id)}>
          DELETE
        </button>
      </div>
    );
  }
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  removePost: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  removePost: id => dispatch(deletePost(id))
});

export default connect(
  undefined,
  mapDispatchToProps
)(DeleteButton);
