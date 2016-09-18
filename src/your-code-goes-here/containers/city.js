import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router';

import * as CitiesActions from '../actions/cities';

class Person extends Component {
    constructor(props: Object, context: Object) {
        super(props, context);
        this.loadRoute = this.loadRoute.bind(this);
    }
    componentWillMount() {
        this.loadRoute(this.props);
    }
    loadRoute(props) {
        const { dispatch, routeParams } = props;
        dispatch(CitiesActions.getCity(routeParams.id));
    }
    render() {
        const { personReducer } = this.props;
        const { person } = personReducer;

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
