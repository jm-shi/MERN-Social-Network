import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DiscoverPage from '../containers/DiscoverPage';
import FollowingPage from '../containers/FollowingPage';
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import ProfilePage from '../containers/ProfilePage';
import SettingsPage from '../containers/SettingsPage';
import SignupPage from '../containers/SignupPage';
import NotFound from './NotFound';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/profile/:id" component={ProfilePage} />
      <Route path="/following" component={FollowingPage} />
      <Route path="/discover" component={DiscoverPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
