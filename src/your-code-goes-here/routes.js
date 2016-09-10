import React from 'react';
import { Route } from 'react-router';

import AppRoot from './containers/AppRoot';
import People from './containers/people';
import Person from './containers/person';


export default (
  <Route path="/" component={AppRoot}>
    <Route path="people" component={People} />
    <Route path="people/:id" component={Person} />
  </Route>
);
