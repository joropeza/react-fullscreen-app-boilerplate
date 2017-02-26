import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        const { cityReducer } = this.props;
        const { city } = cityReducer;

        if (city) {
            return (
                <div>
                    <h1>{city.name}</h1>
                </div>
            );
        }
        return (<div />);
    }
}

function select(state) {
    return {
        cityReducer: state.city,
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Person);
