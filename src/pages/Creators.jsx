import React from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.css';
function Creators() {
    return (
        <div className="page"> 
            
            <div className="container>">
                <div className="title">
                    <h1> Creators </h1>
                </div>
                <div className="subsection" id="katherine">
                    <h2> Katherine </h2> 
                    <p> Hi I’m Katherine, I’m a college student studying Computer Science and Immersive Media Design. <br /><a href="https://kath3rine.github.io"> Portfolio </a> |
                    <a href="https://linkedin.com/in/kli17"> Linkedin</a>
                    </p>
                    
                </div>

                <div className="subsection" id="chloe">
                    <h2> Chloe </h2>
                    <p> Hey I’m Chloe, I’m super excited to be working on this project because I have a passion for both music, emotions, and of course VR. I think it’ll be cool to see the fractal environment interact with physical human emotions as we play around with shape, size, speed, color, intensity and more within the virtual world. I have never done anything like this except for a robot that changed shape based on musical input, however this was within the physical world. Time to get virtual!</p>
                </div>

                <div className="subsection" id="camryn">
                    <h2> Camryn </h2>
                    <p> Camryn bio here</p>
                </div>

            </div>
        </div>

    );
};

export default Creators;