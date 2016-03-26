import * as peopleActions from '../actions/people';

const initialState = {
    people: null,
    loading: false,
    loaded: false
};

export default function listBuilder(state = initialState, action = {}) {
    switch (action.type) {
        case peopleActions.GET_PEOPLE_REQUEST:
            return (() => {
                return {
                    ...state,
                    loading: true,
                    loaded: false,
                    people: null
                };
            })();
        case peopleActions.GET_PEOPLE_REQUEST_SUCCESS:
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
