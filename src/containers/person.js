import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router';

import * as PeopleActions from '../actions/people';

class Person extends Component {
    constructor(props: Object, context: Object) {
        super(props, context);
        this._loadRoute = this._loadRoute.bind(this);
    }
    componentWillMount() {
        this._loadRoute(this.props);
    }
    _loadRoute(props) {
        const { dispatch, routeParams } = this.props;
        dispatch(PeopleActions.getPerson(routeParams.id));
    }
    render() {
    	const { personReducer } = this.props;
    	const { person } = personReducer;
        console.log('person', person);

        if (person) {
	        return (
	        	<div>
		        	<h1>{person.firstName + ' ' + person.lastName}</h1>
	        	</div>
	        );
    	} else {
    		return (<div></div>);
    	}
    }
}

function select(state) {
    return {
        personReducer: state.person
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Person);
