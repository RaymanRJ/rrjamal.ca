import React, { useEffect, useState } from 'react';
import { fetchUserRepositories } from './utils/githubAPI';
import './App.css';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';

function App() {
    const [projects, setProjects] = useState([]);
    
    const githubUser = process.env.REACT_APP_GITHUB_USER;
    const linkedInUser = process.env.REACT_APP_LINKEDIN_USER;
    const kaggleUser = process.env.REACT_APP_KAGGLE_USER;
    const assetBucket = `https://${process.env.REACT_APP_ASSET_BUCKET}.s3.amazonaws.com`;
    
  
    useEffect(() => {
      const fetchData = async () => {
        const repos = await fetchUserRepositories(githubUser);
        setProjects(repos);
      };
  
      fetchData();
    }, [githubUser]);

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

    return (
        <div className="container">
            <div className="left-column">
                <LeftColumn assetBucket={assetBucket} githubUser={githubUser} kaggleUser={kaggleUser} linkedInUser={linkedInUser}/>
            </div>
            <div className="right-column">
                <RightColumn assetBucket={assetBucket}/>
            </div>
        </div>
    );
}

export default App;



