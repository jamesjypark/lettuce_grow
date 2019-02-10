import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlantPanel from './Components/PlantPanel/PlantPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <PlantPanel />
        <Footer />
      </div>
    );
  }
}
export default App;
