import React, {Component} from "react";
import "./CustomWindow.css";
import "../Button/AddButton";
import AddButton from "../Button/AddButton";

export class CustomWindow extends Component {
    constructor(props) {
        super(props);
    }

    buildCrops(crops) {
        var cropString = [];
        crops && crops.map(crop => (cropString.push(crop.name)));
        return cropString.join(", ");
    }

    onClick = () => { 
        const { onCommunitySelected } = this.props;
        console.log('clicked!');
        onCommunitySelected(this.props.name); 
    }

    render() {
        return (<div className="custom_window">
            <div>    
                <AddButton onClick={this.onClick} />
                <p className="community">{'"' + this.props.name + '"' + " Community"}</p>
            </div>
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