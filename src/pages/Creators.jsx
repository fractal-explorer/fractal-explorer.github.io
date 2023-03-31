import React from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.css';
function Creators() {
    return (
        <div className="creators"> 
            <div className="title">
                <h1> Creators </h1>
            </div>
            
            <div className="creator-section>">
                <div className="creator-bio" id="katherine">
                    <h2 id="katherine-name"> <a href="https://www.kath3rine.github.io"> Katherine
                        </a> </h2>
                    <p> katherine bio here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className="creator-bio" id="chloe">
                    <h2> Chloe </h2>
                    <p> chloe bio here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="creator-bio" id="camryn">
                    <h2> Camryn </h2>
                    <p> camryn bio here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>

    );
};

export default Creators;