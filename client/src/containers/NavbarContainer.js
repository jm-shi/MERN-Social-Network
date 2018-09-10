import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { logoutUser } from '../actions/authActions';

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Navbar);
