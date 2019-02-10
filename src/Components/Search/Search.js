import React, { Component } from "react";
import SearchCard from "../SearchCard/SearchCard";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultList: ["carrots", "cabbages", "tomatoes", "lettuce"],
      currentList: []
    };
    this.textArea = React.createRef();
  }
  onTextAreaChange = e => {
    const { defaultList, currentList } = this.state;
    let newList = [];
    for (let i = 0; i < defaultList.length; i++) {
      if (defaultList[i].includes(e.target.value)) {
        newList.push(defaultList[i]);
      }
    }
    console.log("newList is " + newList);
    console.log(this.state.currentList);
    console.log(e.target.value);
    this.setState({ currentList: newList });
    // let tempList = this.state.currentList;
    // for (let i = 0; i < tempList.length; i++) {
    //   alert(i);
    // }
  };
  render() {
    const { currentList } = this.state;
    return (
      <div className="Search">
        <div className="title">search crops</div>
        <textarea ref={this.textArea} onChange={this.onTextAreaChange} />
        <div>6 regional zones 151 vendors 511 crops</div>
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
