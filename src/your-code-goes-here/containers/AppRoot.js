import React, { Component } from 'react';
import { connect } from 'react-redux';

import FullScreenLayout from '../../boilerplate-layout/components/layout/fullscreenLayout';

import HomePageContent from '../components/content/homePageContent';
import HeaderContent from '../components/content/headerContent';

class AppRoot extends Component {
    render() {
        const { children } = this.props;

        const headerOptions = {};
        headerOptions.useHeader = true;
        headerOptions.component = (<HeaderContent />);

        const footerOptions = {};
        footerOptions.useFooter = true;
        footerOptions.component = (<h4>Footer</h4>);

        const contentOptions = {};
        contentOptions.component = (children) ? (<div>{children}</div>) : (<HomePageContent />);

        return (
            <FullScreenLayout
              contentOptions={contentOptions}
              headerOptions={headerOptions}
              footerOptions={footerOptions}
            />
        );
    }
}

function mapState(state) {
    return {
    };
}

function mapDispatch(dispatch) {
    return {
    };
}

export default connect(mapState, mapDispatch)(AppRoot);
