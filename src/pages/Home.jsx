import React from 'react';
import '../styles/styles.css';
import YoutubeEmbed from '../components/YoutubeEmbed';
import Header from '../images/header.png';

function Home() {
    return (
        <div className="homepage">
            <img id="header" src={Header}></img>
            <div className="homebody">
                <p> 
                Brief about the project Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ex
                </p>
                <div id="video">
                    <YoutubeEmbed embedId="dQw4w9WgXcQ" />
                </div>
                
            </div>
            
        </div>
    );
};

export default Home;