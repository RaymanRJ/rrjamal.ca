import React, { useEffect, useState } from 'react';
import Bartender from './components/Bartender/Bartender';
import LeftColumn from './components/LeftColumn/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';

import './App.css';

function App() {
    const [showBartender, setShowBartender] = useState(true);
    const [showLeftColumn, setShowLeftColumn] = useState(false);
    const [showRightColumn, setShowRightColumn] = useState(false);

    const githubUser = process.env.REACT_APP_GITHUB_USER;
    const linkedInUser = process.env.REACT_APP_LINKEDIN_USER;
    const kaggleUser = process.env.REACT_APP_KAGGLE_USER;
    const assetBucket = `https://${process.env.REACT_APP_ASSET_BUCKET}.s3.amazonaws.com`;
    

    useEffect(() => {
        const updateSpotlightPosition = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        document.body.style.setProperty('--x', `${x}px`);
        document.body.style.setProperty('--y', `${y}px`);
        };

        // Add event listener when component mounts
        document.addEventListener('mousemove', updateSpotlightPosition);

        // Clean up the listener when the component is unmounted
        return () => {
            document.removeEventListener('mousemove', updateSpotlightPosition);
        };
    }, []);

    useEffect(() => {
        const bartenderTimer = setTimeout(() => {
            setShowBartender(false);
        }, 2000);

        const columnTimer = setTimeout(() => {
            setShowLeftColumn(true);
            setShowRightColumn(true);
        }, 1000);

    
        return () => {
            clearTimeout(bartenderTimer);
            clearTimeout(columnTimer);
        };
      }, []);

    return (
        <div className="container">
            {showBartender && <Bartender />}
            {showLeftColumn && 
                <div className="left-column">
                    <LeftColumn assetBucket={assetBucket} githubUser={githubUser} kaggleUser={kaggleUser} linkedInUser={linkedInUser}/>
                </div>
            }
            {showRightColumn && 
                <div className="right-column">
                    <RightColumn assetBucket={assetBucket}/>
                </div>
            }
        </div>
    );
}

export default App;



