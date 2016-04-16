// import * as peopleData from '../data/people';
import * as PeopleService from '../services/people';

export const GET_PEOPLE_REQUEST = 'GET_PEOPLE_REQUEST';
export const GET_PEOPLE_REQUEST_SUCCESS = 'GET_PEOPLE_REQUEST_SUCCESS';
export const GET_PEOPLE_REQUEST_FAILURE = 'GET_PEOPLE_REQUEST_FAILURE';

export const GET_PERSON_REQUEST = 'GET_PEOPLE_REQUEST';
export const GET_PERSON_REQUEST_SUCCESS = 'GET_PEOPLE_REQUEST_SUCCESS';
export const GET_PERSON_REQUEST_FAILURE = 'GET_PEOPLE_REQUEST_FAILURE';

export function getPeopleRequest() {
    return {
        type: GET_PEOPLE_REQUEST
    };
}

export function getPeopleRequestSuccess(people) {
    return {
        type: GET_PEOPLE_REQUEST_SUCCESS,
        data: people
    };
}

export function getPeople(options) {
    return function (dispatch) {
        dispatch(getPeopleRequest(options));
        PeopleService.getMany()
		.then(
            results => dispatch(getPeopleRequestSuccess(results))
        );
    };
}

export function getPersonRequest() {
    return {
        type: GET_PERSON_REQUEST
    };
}

export function getPersonRequestSuccess(person) {
    return {
        type: GET_PERSON_REQUEST_SUCCESS,
        data: person
    };
}

export function getPerson(id) {
    return function (dispatch) {
        dispatch(getPersonRequest());
        PeopleService.getOne(id)
		.then(
            results => dispatch(getPersonRequestSuccess(results))
        );
    };
}
