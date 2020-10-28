import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import logo from './images/logorourke.png';

function NavBar(){
        return (
            <nav class="navbar navbar-dark bg-dark navbar-fixed-top">
                    <div class="logo">   
                        <Image src={ logo } fluid/>
                    </div>
                    
                    {/* <h1 class="navbar-brand" href="#">Rourke O'Sullivan</h1> */}
                    <div>
                        <Link class="nav-item" to='/'>Home</Link>
                        <Link class="nav-item" to='/Projects'>Projects</Link>
                        <Link class="nav-item" to='/Contact'>Contact</Link>
                    </div>
            </nav>
        );
}

export default NavBar;
