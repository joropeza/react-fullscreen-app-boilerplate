import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class HeaderContent extends Component {
    render() {
        const { route } = this.props;
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="#">Fullscreen App</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={route === 'HOME' ? 'nav-item active' : 'nav-item'}>
                            <Link className="nav-link" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/cities'}>Cities</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/city/4'}>PDX</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

HeaderContent.propTypes = {
    route: PropTypes.string,
};
