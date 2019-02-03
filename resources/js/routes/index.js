import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from 'forms/Login';
import NotFound from 'components/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={() => <Login />} />
    <Route exact path="*" component={NotFound} />
  </Switch>
);

export default Routes;
