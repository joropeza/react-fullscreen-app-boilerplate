import React, { PropTypes } from 'react';

const Header = (props) => {
    const { children } = props;
    return (
        <div>{children}</div>
    );
};

Header.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Header;
