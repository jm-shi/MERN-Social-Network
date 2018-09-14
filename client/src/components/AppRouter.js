import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DiscoverPage from '../containers/DiscoverPage';
import LoginPage from '../containers/LoginPage';
import SignupPage from '../containers/SignupPage';
import HomePage from '../containers/HomePage';
import NotFound from './NotFound';
import ProfilePage from '../containers/ProfilePage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/profile/:id" component={ProfilePage} />
      <Route path="/discover" component={DiscoverPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
