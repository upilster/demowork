import React, { Component } from 'react';
import './Styles/css/styles.min.css'
import './App.css';
import Home from './Components/Routes/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
