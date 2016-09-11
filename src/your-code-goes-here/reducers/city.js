import * as peopleActions from '../actions/people';

const initialState = {
    person: null
};

export default function listBuilder(state = initialState, action = {}) {
    switch (action.type) {
        case peopleActions.GET_PERSON_REQUEST:
            return (() => {
                return {
                    ...state,
                    person: null
                };
            })();
        case peopleActions.GET_PERSON_REQUEST_SUCCESS:
            return (() => {
                return {
                    ...state,
                    person: action.data
                };
            })();
        default:
            return state;
    }
}
