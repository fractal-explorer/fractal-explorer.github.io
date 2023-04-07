import React from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.css';
import YoutubeEmbed from '../components/YoutubeEmbed';
import Mandelbrot from '../images/mandelbrot.jpg';
import Mandelzoom from '../images/mandelzoom.jpeg';

function Home() {
    return (
        <div className="page">
            <div className="homebody">
                <h1>FRACTAL EXPLORER</h1>
                <p> 
                <Link to="/about">Fractal Explorer</Link> utilizes technology to combine elements of art, music, math, and psychology to create a moving virtual reality experience. The user chooses a song, and are placed within an immersive animated, recursively generated three-dimensional fractal that changes color, shape, etc. to complement the song. 
                <br /><br />(note: the current pictures/videos are just placeholders for now and will be replaced with actual documentation of the project)
                </p>
                <div id="video">
                    <YoutubeEmbed embedId="dQw4w9WgXcQ" />
                </div>
                {/* 
                <div className="home-photos">
                    <img src={Mandelbrot}></img>
                    <img src={Mandelzoom}></img>
                </div> */}
                
            </div>
            
        </div>
    );
};

export default Home;