import React, { PropTypes } from 'react';

const Footer = (props) => {
    const { children } = props;
    return (
        <div>{children}</div>
    );
};

Footer.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Footer;
