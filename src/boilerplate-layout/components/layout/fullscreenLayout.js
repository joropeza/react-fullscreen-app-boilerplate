import React, { PropTypes } from 'react';

import Content from './parcels/content';
import Header from './parcels/header';
import Footer from './parcels/footer';

const styles = {
    parent: {
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',

        background: 'rgba(255, 255, 255, .1)',
    },
    fillArea: {
        padding: '8px',
        background: 'rgba(0, 0, 255, .1)',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },
    fillAreaContent: {
        background: 'rgba(0, 0, 0, .1)',
        border: '1px solid #000000',
        overflow: 'auto',
        width: '100%',
        padding: '10px',
    },
};

const FullScreenLayout = (props) => {
    const { contentOptions, headerOptions, footerOptions } = props;

    const header = (headerOptions.useHeader) ?
    (<Header>{headerOptions.component}</Header>) :
    null;

    const footer = (footerOptions.useFooter) ?
    (<Footer>{footerOptions.component}</Footer>) :
    null;

    return (
        <div style={styles.parent}>
            <div className="flexbox-item header">
                {header}
            </div>
            <div style={styles.fillArea}>
                <div style={styles.fillAreaContent}>
                    <Content>{contentOptions.component}</Content>
                </div>
            </div>
            <div className="flexbox-item footer">
                {footer}
            </div>
        </div>
    );
};

FullScreenLayout.propTypes = {
    headerOptions: PropTypes.object,
    footerOptions: PropTypes.object,
    contentOptions: PropTypes.object,
};
FullScreenLayout.defaultProps = {
    headerOptions: { useHeader: false },
    footerOptions: { useFooter: false },
    contentOptions: { component: (<div />) },
};

export default FullScreenLayout;
