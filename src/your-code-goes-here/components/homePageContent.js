import React, { Component, PropTypes } from 'react';

export default class HomePageContent extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="inner cover">
            <h1 className="cover-heading">Full-screen single page app</h1>
            <p className="lead">Full-screen app uses react and redux router to create a full screen experience.</p>
            <p className="lead">
              <a href="/people" className="btn btn-lg btn-default">Visit Repo</a>
            </p>
          </div>
        );
    }
}

HomePageContent.propTypes = {
    children: PropTypes.element
};
