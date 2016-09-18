import * as citiesActions from '../actions/cities';

const initialState = {
    person: null
};

export default function listBuilder(state = initialState, action = {}) {
    switch (action.type) {
    case citiesActions.GET_CITY_REQUEST:
        return (() => {
            return {
                ...state,
                person: null,
            };
        })();
    case citiesActions.GET_CITY_REQUEST_SUCCESS:
        return (() => {
            return {
                ...state,
                person: action.data,
            };
        })();
    default:
        return state;
    }
}
