import React, { PropTypes } from 'react';

const testComponent = props => (
    <div>
        {props.label}
    </div>
);

testComponent.propTypes = {
    label: PropTypes.string.isRequired,
};

testComponent.defaultProps = {
    label: 'Hello World',
};

export default testComponent;
