import React from 'react';
import { Route } from 'react-router';

import AppRoot from './containers/AppRoot';
import Cities from './containers/cities';
import City from './containers/city';


export default (
    <Route path="/" component={AppRoot}>
        <Route path="cities" component={Cities} />
        <Route path="city/:id" component={City} />
    </Route>
);
