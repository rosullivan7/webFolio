import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "react-bootstrap/Image";
import banner from './components/images/bannerImg.JPG';
import About from './components/pages/About';


import './App.css';

class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
            <NavBar />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Image src={ banner } fluid />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
        </div>
      </Router>
    );
    }
}

export default App;
