import Promise from 'bluebird';
import * as PeopleData from '../data/people';

export function	getMany() {
	return new Promise(function (resolve, reject) {
	    setTimeout(function() {
	    	resolve(PeopleData.people);
	    });
	}, 1000);
}

export function	getOne(id) {
	return new Promise(function (resolve, reject) {
	    setTimeout(function() {
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