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
                    <h2> What </h2>
                    <p> 
                        Fractals are recursively-generated, infinitely self similar patterns; if you zoom into part of it, you will get a replica of the zoomed-out image, and this can go on forever. The most notable example is the mandelbrot set, which shows how a simple mathematical equation can create complex and beautiful patterns. In our project, the user chooses a song, and the features of the song (e.g. tempo, valence, energy) will determine what the fractal looks like (shape, size, color, speed) in order to match the mood/vibe of the song. 
                    </p>
                </div>

                <div className="subsection" id="inspo">
                    <h2> Why </h2>
                    <p> 
                    We wanted a theme that combined our interests in math, art, music, and psychology. Fractals are constructed using simple rules but can create complex and beautiful patterns, so we chose it as our theme because tweaking a few parameters in the code can quickly and completely change the fractal. We were inspired by visual representations of fractals like the Mandelbrot and Julia set, as well as works like Electric Sheep that utilize color and music to invoke emotions. But, in order to make the experience more immersive, we did ours in 3D instead of 2D. 
                    </p>
                </div>

                <div className="subsection" id="tech">
                    <h2> How </h2>
                    <p> This project was constructed in Unity and can be experienced via an Oculus VR headset. We used Spotify’s API to access various audio traits of the songs, and C# scripts to modify the fractals themselves. </p>
                </div>
            </div>
        </div>

    );
};

export default About;