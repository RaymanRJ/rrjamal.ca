import React from 'react';
import './Contact.css';

function Contact({assetBucket, githubUser, kaggleUser, linkedInUser}) {
    return (
        <div className="contact">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <h1>Contact</h1>
            <ul>
                <li>        
                    <a href="mailto:RaymanRJ@Gmail.com">    
                        <i className="fas fa-envelope"></i>
                        Email
                    </a>
                </li>
                <li>
                    <a href={`https://linkedin.com/in/${linkedInUser}`} target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href={`https://www.kaggle.com/${kaggleUser}`} target="_blank" rel="noreferrer">
                        <i className="fab fa-kaggle"></i>
                        Kaggle
                    </a>
                </li>
                <li>
                    <a href={`https://github.com/${githubUser}`} target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                        GitHub
                    </a>
                </li>
                <li>
                    <a href={`${assetBucket}/resume/Resume.pdf`} target="_blank" rel="noreferrer">
                        <i className="fas fa-file-pdf"></i>
                        Résumé
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;
