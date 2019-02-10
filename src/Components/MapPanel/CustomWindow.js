import React, {Component} from "react";


export class CustomWindow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="custom_window">
            <h4 className="title">{'"' + this.props.name + '"' + " Community"}</h4>
            {this.props.members && <ul>
                {this.props.members.map(member => (<li>{member.name}</li>))}
            </ul>}
        </div>);
    }
}

export default CustomWindow;