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
        const { citiesReducer } = this.props;
        const cityRows = _.map(citiesReducer.cities, (city) => {
            return (
                <li key={city.id}>
                    <Link to={'/city/' + city.id}>
                        {city.name}
                    </Link>
                </li>
            );
        });

        if (!citiesReducer.loading) {
            return (
                <div>
                    <h1>West Coast Cities</h1>
                    <ul>
                        {cityRows}
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
        citiesReducer: state.cities,
    };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(People);
