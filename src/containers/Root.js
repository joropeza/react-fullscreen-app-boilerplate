import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'

import AppRoot from './AppRoot';
import DevTools from './DevTools';

import People from './people';
import Person from './person';

const routes = (
  <Route path="/" component={AppRoot}>
    <Route path="people" component={People} />
    <Route path="people/:id" component={Person} />
  </Route>
);

export default class Root extends Component {
    render() {
        console.log('I am at the root!');
        const { store } = this.props;
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    {routes}
                </Router>
            </Provider>
        );
    }
}
