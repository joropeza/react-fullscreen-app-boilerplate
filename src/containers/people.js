import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router';

import * as PeopleActions from '../actions/people';

class People extends Component {
    constructor(props: Object, context: Object) {
        super(props, context);
        this._loadRoute = this._loadRoute.bind(this);
    }
    componentWillMount() {
        this._loadRoute(this.props);
    }
    _loadRoute(props) {
        const { dispatch, people } = this.props;
        dispatch(PeopleActions.getPeople(null));
    }
    render() {
    	const { people } = this.props;
        console.log('people', people);
    	const peopleRows = _.map(people.people, (person, i) => { 
    		return (
                <li key={person.id}>
                    <Link to={'/people/' + person.id}>
                        {person.firstName + ' ' + person.lastName}
                    </Link>
                </li>
            );
    	});

        return (
        	<div>
	        	<h1>People</h1>
	        	<ul>
	        		{peopleRows}
	        	</ul>
        	</div>
        );
    }
}

function select(state) {
    return {
        people: state.people
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(People);
