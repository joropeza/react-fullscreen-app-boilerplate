import React, { Component } from 'react';

import Content from './parcels/content';

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
		background: 'rgba(0, 0, 0, .3)',
    	border: '1px solid #000000',
    	overflow: 'auto', 
	}
}

export default class FullScreenLayout extends Component {
    render() {
        return (
			<div style={styles.parent}>
				<div className="flexbox-item header">
					Header
				</div>
				<div style={styles.fillArea}>
					<div style={styles.fillAreaContent}>
						<Content />
					</div>
				</div>
				<div className="flexbox-item footer">
					Footer
				</div>
			</div>
		);
    }
}
