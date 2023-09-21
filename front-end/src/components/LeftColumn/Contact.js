import React from 'react';

function Contact({assetBucket, githubUser, linkedInUser}) {
    return (
        <div className="contact">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <h1>Contact</h1>
            <ul>
                <li>        
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:RaymanRJ@Gmail.com">Email</a>
                </li>
                <li>
                    <i className="fab fa-linkedin"></i>
                    <a href={`https://linkedin.com/in/${linkedInUser}`} target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
                <li>
                    <i className="fab fa-github"></i>
                    <a href={`https://github.com/${githubUser}`} target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li>
                    <i className="fas fa-file-pdf"></i>
                    <a href={`${assetBucket}/resume/Resume.pdf`} target="_blank" rel="noreferrer">Résumé</a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;
