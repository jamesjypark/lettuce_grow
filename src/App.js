import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import PlantPanel from './Components/PlantPanel/PlantPanel';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Body />
        <PlantPanel />
        <Footer />
      </div>
    );
  }
}
export default App;
