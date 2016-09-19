import * as citiesActions from '../actions/cities';

const initialState = {
    city: null
};

export default function listBuilder(state = initialState, action = {}) {
    switch (action.type) {
    case citiesActions.GET_CITY_REQUEST:
        return (() => {
            return {
                ...state,
                city: null,
            };
        })();
    case citiesActions.GET_CITY_REQUEST_SUCCESS:
        return (() => {
            return {
                ...state,
                city: action.data,
            };
        })();
    default:
        return state;
    }
}
