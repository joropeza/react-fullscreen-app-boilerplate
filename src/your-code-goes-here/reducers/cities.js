import * as citiesActions from '../actions/cities';

const initialState = {
    cities: null,
    loading: false,
    loaded: false,
};

export default function listBuilder(state = initialState, action = {}) {
    switch (action.type) {
    case citiesActions.GET_CITIES_REQUEST:
        return (() => ({
            ...state,
            loading: true,
            loaded: false,
            cities: null,
        }))();
    case citiesActions.GET_CITIES_REQUEST_SUCCESS:
        return (() => ({
            ...state,
            loading: false,
            loaded: true,
            cities: action.data,
        }))();
    default:
        return state;
    }
}
