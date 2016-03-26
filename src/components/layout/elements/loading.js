import React from 'react';

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
               <p className="center" style={{ marginTop: 100, opacity: 0.5 }}>
                    <i className="fa fa-cog fa-spin fa-5x"></i>
               </p>
            </div>
        );
    }
}

export default Loading;
