import React from 'react';
import Bio from './Bio';
import Contact from './Contact';

function LeftColumn({ assetBucket, githubUser, kaggleUser, linkedInUser }) {
    return (
        <div>
            <Bio />
            <Contact assetBucket={assetBucket} githubUser={githubUser} kaggleUser={kaggleUser} linkedInUser={linkedInUser}/>
        </div>
    );
}

export default LeftColumn;
