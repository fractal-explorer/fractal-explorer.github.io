import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../styles/navbar.css';

function Navbar() {
  return (
    <div class="navbar">
      <Link className="nav-button" to="/"> Home </Link>
      <Link className="nav-button" to="/about">About</Link>
      <Link className="nav-button" to="/creators">Creators</Link>
    </div>
    
  );
}

export default Navbar;