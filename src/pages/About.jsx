import React from 'react';
import '../styles/styles.css';

function About() {
    return(
        <div id="about" className="page"> 
        <div id="about-section" className="container>">
                <div className="title">
                    <h1> About</h1>
                </div>
                <div className="subsection" id="background">
                    <h2> What? </h2>
                    <p> Fractals are recursively-generated, infinitely self similar patterns; if you zoom into part of it, you will get a replica of the zoomed-out image, and this can go on forever. The most notable example is the mandelbrot set, which shows how a simple mathematical equation can create complex and beautiful patterns. [elaborate on how the project works]</p>
                </div>

                <div className="subsection" id="inspo">
                    <h2> Why? </h2>
                    <p> Inspiration, motivation, etc  </p>
                </div>

                <div className="subsection" id="tech">
                    <h2> How </h2>
                    <p> This project was constructed in Unity and can be experienced via an Oculus VR headset. We used Spotify’s API to access various audio traits of the songs, and C# scripts to modify the fractals themselves. [elaborate on technical implementation]</p>
                </div>
            </div>
        </div>

    );
};

export default About;