import React from 'react';
import Bio from './Bio';
import Contact from './Contact';

function LeftColumn({ assetBucket, githubUser, linkedInUser }) {
    return (
        <div>
            <Bio />
            <Contact assetBucket={assetBucket} githubUser={githubUser} linkedInUser={linkedInUser}/>
        </div>
    );
}

export default LeftColumn;
