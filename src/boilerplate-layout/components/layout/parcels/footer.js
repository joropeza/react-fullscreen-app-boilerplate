import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>{children}</div>
        );
    }
}

Footer.propTypes = {
    children: PropTypes.element
};
