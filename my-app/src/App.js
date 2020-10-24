import React, { Component } from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "react-bootstrap/Image";
import banner from './components/images/bannerImg.JPG';


import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <NavBar />
        <Image src={ banner } fluid />
      </div>
    );
    }
}

export default App;
