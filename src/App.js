import React, { Component } from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';
import { Route } from 'react-router';

import AppRoot from './containers/AppRoot';
import RouteA from './containers/routeA';
import RouteB from './containers/routeB';

const routes = (
  <Route path="/" component={AppRoot}>
    <Route path="a" component={RouteA} />
    <Route path="b" component={RouteB} />
  </Route>
);

const reducer = combineReducers({
    router: routerStateReducer
});

const store = compose(
	applyMiddleware(thunk),
  reduxReactRouter({ createHistory })
)(createStore)(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
              <ReduxRouter>
                {routes}
              </ReduxRouter>
            </Provider>
        );
    }
}
