import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
        return (
            <nav class="navbar navbar-dark bg-dark navbar-fixed-top">
                    <h1 class="navbar-brand" href="#">Rourke O'Sullivan</h1>
                    <div>
                        <Link class="nav-item" to='/'>Home</Link>
                        <Link class="nav-item" to='/About'>About</Link>
                        <Link class="nav-item" to='/'>Test1</Link>
                        <Link class="nav-item" to='/'>Contact</Link>
                    </div>
            </nav>
        );
}

export default NavBar;
