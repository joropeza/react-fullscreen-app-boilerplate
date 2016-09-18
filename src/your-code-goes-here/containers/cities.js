import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router';

import * as CitiesActions from '../actions/cities';

import Loading from '../../boilerplate-layout/components/layout/elements/loading';

class People extends Component {
    constructor(props: Object, context: Object) {
        super(props, context);
        this._loadRoute = this._loadRoute.bind(this);
    }
    componentWillMount() {
        this._loadRoute(this.props);
    }
    _loadRoute(props) {
        const { dispatch } = props;
        dispatch(CitiesActions.getCities(null));
    }
    render() {
        const { peopleReducer } = this.props;
        const peopleRows = _.map(peopleReducer.people, (person, i) => { 
            return (
                <li key={person.id}>
                    <Link to={'/people/' + person.id}>
                        {person.firstName + ' ' + person.lastName}
                    </Link>
                </li>
            );
        });

        if (!peopleReducer.loading) {
            return (
                <div>
                    <h1>People</h1>
                    <ul>
                        {peopleRows}
                    </ul>
                </div>
            );
        } else {
            return (<Loading />);
        }
    }
}

function select(state) {
    return {
        peopleReducer: state.people
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(People);
