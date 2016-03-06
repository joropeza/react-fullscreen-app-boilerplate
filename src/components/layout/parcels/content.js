import React, { Component } from 'react';

export default class Content extends Component {
    render() {
    	const { children } = this.props;
        return (
			<div>
				{children}
			</div>
		);
    }
}
