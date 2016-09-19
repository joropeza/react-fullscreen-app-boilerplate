import Promise from 'bluebird';
import _ from 'lodash';
import CitiesData from '../data/cities';

export function getMany() {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve(CitiesData);
        });
    }, 1000);
}

export function getOne(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const city = _.find(CitiesData, (peep) => {
                return peep.id === id;
            });
            if (city) {
                resolve(city);
            } else {
                reject(new Error('city not found!'));
            }
        });
    }, 1000);
}
