import React, { Component } from "react";
import PlantProfile from "../PlantProfile/PlantProfile";
import "./PlantPanel.css";
import Vegetable from "../Vegetable/Vegetable";

class PlantPanel extends Component {
  state = {
    isSelected: false,
    vegetables: ["Tomato", "Potato", "Broccoli", "Spinach"],
    selectedVegetable: ""

    // Tomato: false,
    // Potato: false,
    // Broccoli: false,
    // Spinach: false,
    // isVeggie: false
  };
  // render() {
  //   // const vegetable = ["Tomato", "Potato", "Broccoli", "Spinach"];
  //   const goToVeggie = () => {
  //     this.setState({
  //       Tomato: false,
  //       Potato: false,
  //       Broccoli: false,
  //       Spinach: false,
  //       isVeggie: false
  //     });
  //   };
  //   const goToVeggie1 = v => {
  //     if (v === vegetable[0]) {
  //       console.log(vegetable[0]);
  //       this.setState({
  //         isVeggie: true,
  //         Tomato: true,
  //         Potato: false,
  //         Broccoli: false,
  //         Spinach: false
  //       });
  //     } else if (v === vegetable[1]) {
  //       console.log(vegetable[1]);
  //       this.setState({
  //         isVeggie: !this.state.isVeggie,
  //         Tomato: false,
  //         Potato: true,
  //         Broccoli: false,
  //         Spinach: false
  //       });
  //     } else if (v === vegetable[2]) {
  //       console.log(vegetable[2]);
  //       this.setState({
  //         isVeggie: !this.state.isVeggie,
  //         Tomato: false,
  //         Potato: false,
  //         Broccoli: true,
  //         Spinach: false
  //       });
  //     } else if (v === vegetable[3]) {
  //       console.log(vegetable[3]);
  //       this.setState({
  //         isVeggie: !this.state.isVeggie,
  //         Tomato: false,
  //         Potato: false,
  //         Broccoli: false,
  //         Spinach: true
  //       });
  //     }
  //   };
  //   return (
  //     <div className="parents">
  //       {vegetable.map(v => (
  //         <div>
  //           <div
  //             onClick={() => {
  //               goToVeggie();
  //             }}
  //             className={this.state[v] ? "visible" : "hidden"}
  //           >
  //             <Vegetable isVeggie={this.state.isVeggie} vegetable={v} />
  //           </div>
  //           <div
  //             onClick={() => {
  //               goToVeggie1(v);
  //             }}
  //             className={!this.state.isVeggie ? "visible" : "hidden"}
  //           >
  //             <PlantProfile vegetable={v} />
  //           </div>

  //           {this.state.isVeggie && (
  //             <div
  //               onClick={() => {
  //                 goToVeggie1(v);
  //               }}
  //               className={
  //                 this.state.isVeggie && !this.state[v]
  //                   ? "visible under"
  //                   : "hidden under"
  //               }
  //             >
  //               <PlantProfile vegetable={v} />
  //             </div>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  onVegetableClicked = vegetableName => {
    this.setState({ isSelected: true, selectedVegetable: vegetableName });
  };

  render() {
    const { vegetables, isSelected } = this.state;
    return (
      <div class="PlantPanel">
        {!isSelected && <h1>select your crop</h1>}
        {isSelected && <h1>your crops </h1>}
        <div className="vegetableCards">
          {vegetables.map(vegetableName => (
            <div
              className={[
                "PlantProfile",
                isSelected && vegetableName !== this.state.selectedVegetable
                  ? "hidden"
                  : "",
                isSelected ? "selected" : ""
              ]
                .join(" ")
                .trim()}
            >
              <div>
                <PlantProfile
                  onClick={() => {
                    this.onVegetableClicked(vegetableName);
                  }}
                  vegetable={vegetableName}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PlantPanel;
