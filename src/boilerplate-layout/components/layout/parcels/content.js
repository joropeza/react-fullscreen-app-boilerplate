import React from 'react';

const Content = (props) => {
    const { children } = props;
    return (
        <div>
            {children}
        </div>
    );
};

Content.propTypes = {
    children: React.PropTypes.object.isRequired,
};

export default Content;
