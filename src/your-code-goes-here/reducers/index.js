import { combineReducers } from 'redux';
import people from './people';
import person from './person';

const rootReducer = combineReducers({
    people,
    person,
});

export default rootReducer;
