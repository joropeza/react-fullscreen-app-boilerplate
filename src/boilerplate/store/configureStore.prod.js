import { createStore } from 'redux';
import rootReducer from '../../your-code-goes-here/reducers';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}
