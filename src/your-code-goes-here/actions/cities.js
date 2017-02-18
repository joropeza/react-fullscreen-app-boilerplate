import * as CitiesService from '../services/cities';

export const GET_CITIES_REQUEST = 'GET_CITIES_REQUEST';
export const GET_CITIES_REQUEST_SUCCESS = 'GET_CITIES_REQUEST_SUCCESS';
export const GET_CITIES_REQUEST_FAILURE = 'GET_CITIES_REQUEST_FAILURE';

export const GET_CITY_REQUEST = 'GET_CITY_REQUEST';
export const GET_CITY_REQUEST_SUCCESS = 'GET_CITY_REQUEST_SUCCESS';
export const GET_CITY_REQUEST_FAILURE = 'GET_CITY_REQUEST_FAILURE';

export function getCitiesRequest() {
    return {
        type: GET_CITIES_REQUEST,
    };
}

export function getCitiesRequestSuccess(cities) {
    return {
        type: GET_CITIES_REQUEST_SUCCESS,
        data: cities,
    };
}

export function getCities(options) {
    return function (dispatch) {
        dispatch(getCitiesRequest(options));
        CitiesService.getMany()
        .then(
            results => dispatch(getCitiesRequestSuccess(results)),
        );
    };
}

export function getCityRequest() {
    return {
        type: GET_CITY_REQUEST,
    };
}

export function getCityRequestSuccess(city) {
    return {
        type: GET_CITY_REQUEST_SUCCESS,
        data: city,
    };
}

export function getCity(id) {
    return function (dispatch) {
        dispatch(getCityRequest());
        CitiesService.getOne(id)
        .then(
            results => dispatch(getCityRequestSuccess(results)),
        );
    };
}
