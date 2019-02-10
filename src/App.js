import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import PlantPanel from "./Components/PlantPanel/PlantPanel";
import MapPanel from "./Components/MapPanel/MapPanel";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLandingPage: true,
      // isSearchPage: false,
      // selectCropsPage: false,
      // isResultPage: false,
      // isFindingCommunityPage: false,
      currentDisplay: "landing"
    };
  }

  onHeaderSelected = display => {
    this.setState({
      currentDisplay: display
    });
    // alert(display);
  };

  render() {
    return (
      <div className="App">
      <div>This is sample </div>

        // <Header onHeaderSelected={this.onHeaderSelected} />
        // <Body content={this.state.currentDisplay} />
        // <MapPanel />
        // <PlantPanel />
        // <Footer />
      </div>
    );
  }
}

export default App;
