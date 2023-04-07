import React from 'react';
import '../styles/styles.css';

function About() {
    return(
        <div id="about" className="page"> 
        <div id="about-section" className="container>">
                <div className="title">
                    <h1> About the Project </h1>
                </div>
                <div className="subsection" id="background">
                    <h2> Background </h2>
                    <p> Inspiration, motivation, etc </p>
                </div>

                <div className="subsection" id="tech">
                    <h2> Technical Implementation </h2>
                    <p> How exactly we made the project</p>
                </div>
            </div>
        </div>

    );
};

export default About;