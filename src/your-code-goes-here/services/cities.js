import Promise from 'bluebird';
import _ from 'lodash';
import CitiesData from '../data/cities';

export function getMany() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CitiesData);
        });
    }, 1000);
}

export function getOne(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const city = _.find(CitiesData, peep => peep.id === id);
            if (city) {
                resolve(city);
            } else {
                reject(new Error('city not found!'));
            }
        });
    }, 1000);
}
