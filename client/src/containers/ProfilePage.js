import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import defaultImage from '../images/pebbleBeach.JPG';
import { updateCurrentUser } from '../actions/authActions';
import { getUser } from '../actions/userActions';
import Loading from '../components/Loading';
import NavbarContainer from './NavbarContainer';
import UserAvatar from '../components/UserAvatar';

const styles = theme => ({
  backgroundContainer: {
    alignItems: 'center',
    backgroundImage: `url(${defaultImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    height: '50vh',
    justifyContent: 'center',
    width: '100%'
  },
  editButton: {
    margin: theme.spacing.unit,
    position: 'absolute',
    right: '1vw',
    top: '50vh'
  },
  saveButton: {
    margin: theme.spacing.unit
  },
  formContainer: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: 140,
    justifyContent: 'center',
    width: '33.3%'
  },
  modalPaper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    outline: 'none',
    transform: 'translate(-50%, -50%)'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  root: {
    flexGrow: 1
  }
});

class ProfilePage extends Component {
  state = {
    bio: '',
    email: '',
    loading: true,
    name: '',
    modalOpen: false
  };

  componentDidMount = () => {
    const { retrieveUser, match } = this.props;
    const userId = match.params.id;
    retrieveUser(userId).then((res) => {
      this.setState({
        bio: res.payload.user.bio,
        email: res.payload.user.email,
        loading: false,
        name: res.payload.user.name
      });
    });
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateUser, user } = this.props;
    const { bio, email, name } = this.state;
    updateUser(bio, email, name, user.userId);
    this.handleModalClose();
  };

  render() {
    const { classes, user } = this.props;
    const { loading, modalOpen } = this.state;

    return loading ? (
      <Loading />
    ) : (
      <div>
        <NavbarContainer />
        <div className={classes.backgroundContainer}>
          <Button
            variant="contained"
            className={classes.editButton}
            onClick={this.handleModalOpen}
          >
            Edit Profile
          </Button>
          <Card>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <UserAvatar
                author={user.name}
                authorId={user.userId}
                avatarColor={user.avatarColor}
              />
              <Typography variant="headline">{user.name}</Typography>
              <Typography>{user.email}</Typography>
            </CardContent>
          </Card>
        </div>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Paper className={classes.paper}>
                <Typography variant="display1">235</Typography>
                <Typography variant="headline">Following</Typography>
              </Paper>
              <Paper className={classes.paper}>
                <Typography variant="display1">629</Typography>
                <Typography variant="headline">Followers</Typography>
              </Paper>
              <Paper className={classes.paper}>
                <Typography variant="display1">52.4k</Typography>
                <Typography variant="headline">Views</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={modalOpen}
          onClose={this.handleModalClose}
        >
          <div className={classes.modalPaper}>
            <form
              className={classes.formContainer}
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <Typography
                variant="title"
                id="modal-title"
                className={classes.spacing}
              >
                Edit Profile
              </Typography>
              <TextField
                required
                fullWidth
                className={classes.textField}
                defaultValue={user.name}
                id="name"
                label="Name"
                margin="normal"
                name="name"
                onChange={this.handleChange}
                placeholder="What is your name?"
              />
              <TextField
                required
                fullWidth
                className={classes.textField}
                defaultValue={user.email}
                id="email"
                label="Email"
                margin="normal"
                name="email"
                onChange={this.handleChange}
                placeholder="This email is used to log in to your account."
              />
              <TextField
                fullWidth
                className={classes.textField}
                defaultValue=""
                id="interests"
                label="Interests"
                margin="normal"
                name="interests"
                onChange={this.handleChange}
                placeholder="What are your interests?"
              />
              <TextField
                fullWidth
                multiline
                className={classes.textField}
                defaultValue=""
                id="bio"
                label="Bio"
                margin="normal"
                name="bio"
                onChange={this.handleChange}
                placeholder="Describe yourself."
              />
              <Button
                fullWidth
                color="primary"
                className={classes.saveButton}
                type="submit"
                variant="contained"
              >
                Save
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  retrieveUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  retrieveUser: userId => dispatch(getUser(userId)),
  updateUser: (bio, email, name, id) =>
    dispatch(updateCurrentUser(bio, email, name, id))
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProfilePage);
