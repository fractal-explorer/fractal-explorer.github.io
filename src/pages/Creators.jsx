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
                    <h2 id="katherine-name"> <a href="https://www.kath3rine.github.io"> Katherine
                        </a> </h2>
                    <p> Hi I’m Katherine, I’m a college student studying Computer Science and Immersive Media Design. I’m always looking to learn new technologies to create innovative works, so I’m super excited about this project because I get to combine my interests in tech and art to create an immersive virtual reality experience whilst drawing elements from other fields like math, music, and psychology.  </p>
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