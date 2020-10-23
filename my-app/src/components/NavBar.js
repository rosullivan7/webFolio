import React, { Component } from 'react';

class NavBar extends Component{
    render() {
        return (
            
            <nav class="navbar navbar-dark bg-dark navbar-fixed-top">
                    <h1 class="navbar-brand" href="#">Rourke O'Sullivan</h1>
                    <div>
                        <a class="nav-item" href="#">Home</a>
                        <a class="nav-item" href="#">Page 1</a>
                        <a class="nav-item" href="#">Page 2</a>
                        <a class="nav-item" href="#">Page 3</a>
                    </div>

                    {/* <ul class="nav navbar-nav">
                        <li class="nav-item"><a href="#">Home</a></li>
                        <li class="nav-item"><a href="#">Page 1</a></li>
                        <li class="nav-item"><a href="#">Page 2</a></li>
                        <li class="nav-item"><a href="#">Page 3</a></li>
                    </ul> */}
            </nav>

        );
    }
}

export default NavBar;
