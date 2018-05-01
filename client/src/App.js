import React, { Component } from 'react';
import logo from "./Media/workclub_logo.png";
import './Styles/css/styles.min.css'
import './App.css';
import Nav from './Components/Header/Nav';
import Footer from './Components/Footer/Footer';
import Home from './Components/Routes/Home/Home';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav logo={logo} />
        <Home />
      <Footer />  
      </div>
    );
  }
}

export default App;
