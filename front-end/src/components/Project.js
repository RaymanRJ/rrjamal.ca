// Project.js
import React from 'react';

function Project(githubProject) {
    const { title, description } = githubProject;
    console.log(githubProject);

    return (
        <div className="project">
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
    );
}

export default Project;
