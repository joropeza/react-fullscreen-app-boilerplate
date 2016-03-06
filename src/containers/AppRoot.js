import React, { Component } from 'react';

import FullScreenLayout from '../components/layout/fullscreenLayout';

import HomePageContent from '../components/homePageContent';
import HeaderContent from '../components/headerContent';

export default class AppRoot extends Component {
    render() {

        const headerOptions = {};
        headerOptions.useHeader = true;
        headerOptions.component = (<HeaderContent />);

        const footerOptions = {};
        footerOptions.useFooter = true;
        footerOptions.component = (<h4>Footer</h4>);

        const contentOptions = {};
        contentOptions.component = (<HomePageContent />);

        return (
			<FullScreenLayout contentOptions={contentOptions} headerOptions={headerOptions} footerOptions={footerOptions} />
		);
    }
}
