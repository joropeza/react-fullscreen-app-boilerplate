import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>{children}</div>
        );
    }
}

Header.propTypes = {
    children: PropTypes.element,
};
