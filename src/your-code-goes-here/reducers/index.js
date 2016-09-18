import { combineReducers } from 'redux';
import cities from './cities';
import city from './city';

const rootReducer = combineReducers({
    cities,
    city,
});

export default rootReducer;
