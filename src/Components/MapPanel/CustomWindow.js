import React, {Component} from "react";
import "./CustomWindow.css";

export class CustomWindow extends Component {
    constructor(props) {
        super(props);
    }

    buildCrops(crops) {
        var cropString = [];
        crops && crops.map(crop => (cropString.push(crop.name)));
        return cropString.join(", ");
    }

    render() {
        return (<div className="custom_window">
            <h2>{'"' + this.props.name + '"' + " Community"}</h2>
            {this.props.members && this.props.members.map(member => (
                    <div className="master">
                        {member.crops != null && <div className="circle" />}
                        <div className="listitem">
                            <p className="title">{member.name}</p>
                            <p className="crops">{this.buildCrops(member.crops)}</p>
                        </div>
                    </div>
                ))}
        </div>);

    }
}

export default CustomWindow;