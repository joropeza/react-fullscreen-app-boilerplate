import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class HeaderContent extends Component {
    render() {
        const { route } = this.props;
        return (
           <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button
                          type="button"
                          className="navbar-toggle collapsed"
                          data-toggle="collapse"
                          data-target="#navbar"
                          aria-expanded="false"
                          aria-controls="navbar"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Fullscreen App</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className={route === 'HOME' ? 'active' : null}><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/cities'}>Cities</Link></li>
                            <li><Link to={'/city/4'}>PDX</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

HeaderContent.propTypes = {
    route: PropTypes.string
};
