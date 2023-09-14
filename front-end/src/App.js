import React, { useEffect, useState } from 'react';
import { fetchUserRepositories } from './utils/githubAPI';
import Project from './components/Project';
import PictureDisplay from './components/Picture';
import './App.css';

function App() {
    const [projects, setProjects] = useState([]);

    const githubUser = "RaymanRJ";
    const assetBucket = "https://rrjamal-assets.s3.amazonaws.com";
  
    useEffect(() => {
      const fetchData = async () => {
        const repos = await fetchUserRepositories(githubUser);
        setProjects(repos);
      };
  
      fetchData();
    }, []);

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
                <h1>Rayman Jamal</h1>
                <h3>Software Engineer based in Toronto</h3>
                <p>I type things into my machine. Things then happen in other machines. Sometimes those things even happen as planned.</p>
            </div>
            <div className="right-column">
                {/* <PictureDisplay assetBucket={assetBucket} /> */}
                {/* {projects.map((project, index) => (
                <Project key={index} title={project.title} description={project.description} />
                ))} */}
            </div>
        </div>
    );
}

export default App;



