import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "react-bootstrap/Image";
import banner from './components/images/bannerImg.JPG';
import About from './components/pages/About';
import Home from './components/Home';


import './App.css';

class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
            <NavBar />

            {/* HOME PAGE */}
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Image src={ banner } fluid />
                <Home />
              </React.Fragment>
            )} />

              {/* ABOUT PAGE */}
            <Route path="/about" component={About} />
        </div>
      </Router>
    );
    }
}

export default App;
