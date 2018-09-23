import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

import compose from 'recompose/compose';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import MenuItem from '@material-ui/core/MenuItem';

import colors from '../misc/colors';
import defaultImage from '../images/pebbleBeach.JPG';
import { updateCurrentUser } from '../actions/authActions';
import { getFollowers, getFollowing, getUser } from '../actions/userActions';
import Loading from '../components/Loading';
import NavbarContainer from './NavbarContainer';
import UserAvatar from '../components/UserAvatar';
import PostFeed from './PostFeed';

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
  date: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5em'
    }
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
    avatarColor: 17,
    bio: '',
    createdAt: 0,
    displayedAvatarColor: 17,
    displayedBio: '',
    displayedEmail: '',
    displayedName: '',
    email: '',
    followers: [],
    following: [],
    loadingFollowers: true,
    loadingFollowing: true,
    loadingUser: true,
    modalOpen: false,
    name: '',
    profileId: '',
    showEmail: false,
    showEmailSavedResult: false
  };

  componentDidMount = () => {
    const { history } = this.props;
    if (!localStorage.jwtToken) {
      return history.push('/login');
    }

    const {
      getUsersYouAreFollowing,
      getYourFollowers,
      retrieveUser,
      match
    } = this.props;
    const userId = match.params.id;

    getUsersYouAreFollowing(userId).then((res) => {
      this.setState({
        following: res.payload.user.following,
        loadingFollowing: false
      });
    });

    getYourFollowers(userId).then((res) => {
      this.setState({
        followers: res.payload.user.followers,
        loadingFollowers: false
      });
    });

    return retrieveUser(userId).then((res) => {
      this.setState({
        avatarColor: res.payload.user.avatarColor,
        bio: res.payload.user.bio,
        createdAt: res.payload.user.createdAt,
        displayedAvatarColor: res.payload.user.avatarColor,
        displayedBio: res.payload.user.bio,
        displayedEmail: res.payload.user.email,
        displayedName: res.payload.user.name,
        email: res.payload.user.email,
        loadingUser: false,
        name: res.payload.user.name,
        profileId: res.payload.user._id,
        showEmail: res.payload.user.showEmail,
        showEmailSavedResult: res.payload.user.showEmail
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

  handleSwitchChange = (e) => {
    const { value } = e.target;
    this.setState({
      [value]: e.target.checked
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateUser, signedInUser } = this.props;
    const { avatarColor, bio, email, name, showEmail } = this.state;

    updateUser(
      avatarColor,
      bio,
      email,
      name,
      signedInUser.userId,
      showEmail
    ).then(() => {
      this.setState(
        {
          displayedAvatarColor: avatarColor,
          displayedBio: bio,
          displayedEmail: email,
          displayedName: name,
          showEmailSavedResult: showEmail
        },
        () => {
          window.location.reload();
        }
      );
    });
  };

  render() {
    const { classes, getTheUser, match, signedInUser } = this.props;
    const {
      avatarColor,
      createdAt,
      displayedAvatarColor,
      displayedBio,
      displayedEmail,
      displayedName,
      followers,
      following,
      loadingFollowers,
      loadingFollowing,
      loadingUser,
      modalOpen,
      profileId,
      showEmail,
      showEmailSavedResult
    } = this.state;

    return loadingFollowers || loadingFollowing || loadingUser ? (
      <div>
        <NavbarContainer />
        <Loading />
      </div>
    ) : (
      <div>
        <NavbarContainer />
        <div className={classes.backgroundContainer}>
          <Button
            variant="contained"
            className={classes.editButton}
            onClick={this.handleModalOpen}
            style={{
              display: profileId === signedInUser.userId ? 'block' : 'none'
            }}
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
                author={displayedName}
                authorId={profileId}
                avatarColor={displayedAvatarColor}
                getUser={getTheUser}
              />
              <Typography variant="headline">{displayedName}</Typography>
              {showEmailSavedResult ? (
                <Typography>{displayedEmail}</Typography>
              ) : null}
              <Typography>{displayedBio}</Typography>
            </CardContent>
          </Card>
        </div>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Paper className={classes.paper}>
                <Typography variant="display1">{following.length}</Typography>
                <Typography variant="headline">Following</Typography>
              </Paper>
              <Paper className={classes.paper}>
                <Typography variant="display1">{followers.length}</Typography>
                <Typography variant="headline">Followers</Typography>
              </Paper>
              <Paper className={classes.paper}>
                <Typography variant="display1" className={classes.date}>
                  {moment(createdAt).format('l')}
                </Typography>
                <Typography variant="headline">Joined</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <PostFeed onProfilePage match={match} />
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
                defaultValue={signedInUser.name}
                id="name"
                label="Name"
                margin="normal"
                name="name"
                onChange={this.handleChange}
                placeholder="What is your name?"
              />
              <TextField
                fullWidth
                select
                className={classes.textField}
                value={avatarColor}
                id="avatarColor"
                label="Avatar Color"
                margin="normal"
                name="avatarColor"
                onChange={this.handleChange}
              >
                {colors.map(color => (
                  <MenuItem key={color.value} value={color.value}>
                    {color.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                multiline
                className={classes.textField}
                defaultValue={displayedBio}
                id="bio"
                label="Bio"
                margin="normal"
                name="bio"
                onChange={this.handleChange}
                placeholder="Describe yourself."
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={showEmail}
                    onChange={this.handleSwitchChange}
                    color="primary"
                    value="showEmail"
                  />
                }
                label="Show email"
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
  getTheUser: PropTypes.func.isRequired,
  getUsersYouAreFollowing: PropTypes.func.isRequired,
  getYourFollowers: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  signedInUser: PropTypes.shape({
    createdAt: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
  }).isRequired,
  retrieveUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  signedInUser: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  getTheUser: id => dispatch(getUser(id)),
  getUsersYouAreFollowing: id => dispatch(getFollowing(id)),
  getYourFollowers: id => dispatch(getFollowers(id)),
  retrieveUser: userId => dispatch(getUser(userId)),
  updateUser: (avatarColor, bio, email, name, id, showEmail) =>
    dispatch(updateCurrentUser(avatarColor, bio, email, name, id, showEmail))
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProfilePage);
