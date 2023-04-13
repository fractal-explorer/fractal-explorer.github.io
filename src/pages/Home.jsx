import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.css';
import YoutubeEmbed from '../components/YoutubeEmbed';
import Fractal1a from '../images/fractal-1a.png';
import Fractal1b from '../images/fractal-1b.png';
import Fractal2a from '../images/fractal-2a.png';
import Fractal2b from '../images/fractal-2b.png';
import Fractal3a from '../images/fractal-3a.png';
import Fractal3b from '../images/fractal-3b.png';

function Home() {
    const handleMouseOver1 = e => {
        e.target.style.opacity = 0.4
    }
    const handleMouseOut1 = e => {
        e.target.style.opacity = 1
    }

    return (
        <div className="page">
            <div className="homebody">
                <h1>F R A C T A L   E X P L O R E R</h1>

                <p> 
                <Link to="/about">Fractal Explorer</Link> utilizes technology to combine elements of art, music, math, and psychology to create a moving virtual reality experience. The user chooses a song, and are placed within an immersive animated, recursively generated three-dimensional fractal that changes color, shape, etc. to complement the song. 
                <br /><br />
                (note: the current pictures/videos are just placeholders for now and will be replaced with actual documentation of the project)
                </p>

                <div id="video">
                    <YoutubeEmbed embedId="dQw4w9WgXcQ" />
                </div>
                 
                <div className="home-photos">
                    <div className="home-photo-container"
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}>
                        <img src={Fractal1a}
                        ></img>
                    </div>
                    
                    <div className="home-photo-container"
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}>
                        <img src={Fractal1b}></img>
                    </div>
                    

                    <div className="home-photo-container"
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}>
                        <img src={Fractal2a}></img>
                    </div>

                    <div className="home-photo-container"
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}>
                        <img src={Fractal2b}></img>
                    </div>

                    <div className="home-photo-container"
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}>
                        <img src={Fractal3a}></img>
                    </div>

                    <div className="home-photo-container"
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}>
                        <img src={Fractal3b}></img>
                    </div>
                    
                </div> 
                
            </div>
            
        </div>
    );
};

export default Home;