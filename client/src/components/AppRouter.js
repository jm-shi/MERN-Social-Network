import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LoginPage from '../containers/LoginPage';
import SignupPage from '../containers/SignupPage';
import HomePage from '../containers/HomePage';
import ProfilePage from '../containers/ProfilePage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  </Router>
);

export default AppRouter;
