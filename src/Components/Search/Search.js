import React, { Component } from "react";
import SearchCard from "../SearchCard/SearchCard";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultList: [
        /*
        "Carrots",
        "Cabbages",
        "Tomatoes",
        "Lettuce",
        "Potatoes",
        "Thymes",
        "Green Onions",
        "Blueberries",
        "Raspeberries",
        "Pineapples",
        "Coconuts",
        "Pumkins",
        "Coffee Beans",
        "Cocoa",
        "Onions",
        "Red Onions"
        */
       "Broccoli",
       "Potato",
       "Spinach",
       "Tomato"
      ],
      currentList: []
    };
    this.textArea = React.createRef();
  }
  onTextAreaChange = e => {
    const { defaultList, currentList } = this.state;
    let newList = [];
    for (let i = 0; i < defaultList.length; i++) {
      if (defaultList[i].toLowerCase().includes(e.target.value.toLowerCase())) {
        newList.push(defaultList[i]);
      }
    }
    console.log("newList is " + newList);
    console.log(this.state.currentList);
    console.log(e.target.value);
    this.setState({ currentList: newList });
  };
  render() {
    const { currentList } = this.state;
    return (
      <div className="Search">
        <h1 className="title_search">Search crops</h1>
        <textarea
          placeholder='Try typing "Tomato"!'
          className="TextArea"
          ref={this.textArea}
          onChange={this.onTextAreaChange}
        />
        <div className="info"><b>6</b> regional zones <b>151</b> vendors <b>511</b> crops</div>
        <div className="SearchCards">
          {currentList.map(card => (
            <SearchCard key={card} content={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
