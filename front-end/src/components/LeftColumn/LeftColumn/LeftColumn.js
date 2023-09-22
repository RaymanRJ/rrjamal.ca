import React from 'react';
import Bio from '../Bio/Bio';
import Contact from '../Contact/Contact';
import './LeftColumn.css';

function LeftColumn({ assetBucket, githubUser, kaggleUser, linkedInUser }) {
    return (
        <div>
            <Bio />
            <Contact assetBucket={assetBucket} githubUser={githubUser} kaggleUser={kaggleUser} linkedInUser={linkedInUser}/>
        </div>
    );
}

export default LeftColumn;
