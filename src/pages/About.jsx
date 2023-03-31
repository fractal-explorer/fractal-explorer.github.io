import React from 'react';
import '../styles/styles.css';

function About() {
    return(
        <div className="creators"> 
            <div className="title">
                <h1> About the Project </h1>
            </div>
            
            <div className="creator-section>">
                <div className="creator-bio" id="background">
                    <h2> Background </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className="creator-bio" id="tech">
                    <h2> Technical Implementation </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>

    );
};

export default About;