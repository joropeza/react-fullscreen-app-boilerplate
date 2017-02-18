import React from 'react';
import testComponent from './test';

const HomePageContent = () => {
    const tc = testComponent({});
    return (
    <div className="inner cover">
        <h1 className="cover-heading">Full-screen single page app</h1>
        <p className="lead">
            Full-screen app uses react and redux router to create a full screen experience.
        </p>
        <p className="lead">
            <a href="https://github.com/joropeza/react-fullscreen-app-boilerplate" className="btn btn-lg btn-default">Visit Repo</a>
        </p>
        {tc}
    </div>);
};

export default HomePageContent;
