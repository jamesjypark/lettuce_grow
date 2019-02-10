import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import PlantPanel from './Components/PlantPanel/PlantPanel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLandingPage: true,
      isSearchPage: false,
      selectCropsPage: false,
      isResultPage: false,
      isFindingCommunityPage: false,
      
    };
  }

  render() {
    const changeAccord = string => {
   
      if (string === "Search") {
        this.setState({isSearchPage: true})
      } else if (string === "") {

      }
    }
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
