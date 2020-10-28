import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "react-bootstrap/Image";
import banner from './components/images/bannerImg.JPG';
import Projects from './components/pages/Projects';
import Home from './components/pages/Home';
import Footer from './components/footer';
import Contact from './components/pages/Contact';

import './App.css';

class App extends Component{
  render() {
    return (
      <Router>
        <div className="App" class="App">
            <NavBar />

            <div class="content">

              {/* HOME PAGE */}
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <Image src={ banner } fluid />
                  <Home />
                </React.Fragment>
              )} />

              {/* PROEJCTS PAGE */}
              <Route path="/Projects" component={Projects} />

              {/* CONTACT PAGE */}
              <Route path="/Contact" component={Contact} />

            </div>

            <Footer />
        </div>
      </Router>
    );
    }
}

export default App;
