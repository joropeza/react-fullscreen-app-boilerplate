import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../../your-code-goes-here/reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/,
    ),
  ),
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk), enhancer);

    if (module.hot) {
        module.hot.accept('../../your-code-goes-here/reducers', () =>
      store.replaceReducer(require('../../your-code-goes-here/reducers').default),
    );
    }

    return store;
}
