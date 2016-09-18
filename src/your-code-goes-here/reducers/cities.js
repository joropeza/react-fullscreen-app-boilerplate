import * as citiesActions from '../actions/cities';

const initialState = {
    people: null,
    loading: false,
    loaded: false,
};

export default function listBuilder(state = initialState, action = {}) {
    switch (action.type) {
        case citiesActions.GET_CITIES_REQUEST:
            return (() => {
                return {
                    ...state,
                    loading: true,
                    loaded: false,
                    people: null
                };
            })();
        case citiesActions.GET_CITIES_REQUEST_SUCCESS:
            return (() => {
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    people: action.data
                };
            })();
        default:
            return state;
    }
}
