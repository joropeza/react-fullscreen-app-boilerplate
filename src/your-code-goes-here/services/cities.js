import Promise from 'bluebird';
import _ from 'lodash';
import * as CitiesData from '../data/cities';

export function getMany() {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve(CitiesData.people);
        });
    }, 1000);
}

export function getOne(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const person = _.find(PeopleData.people, (peep) => { 
                return peep.id === id;
            });
            if (person) {
                resolve(person);
            } else {
                reject(new Error('person not found!'));
            }
        });
    }, 1000);
}
