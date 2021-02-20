import React, { Component } from 'react';
import HomeComponent from "./HomeComponent.jsx";
import AddTripComponent from "./AddTripComponent.jsx";
import ListComponent from "./ListComponent.jsx";
import ReactDOM from 'react-dom'

class ButtonComponent extends Component {
    onClickHomeHandle=()=>{
        ReactDOM.render(<HomeComponent></HomeComponent>,document.getElementById("App"))
    }

    onClickAddHandle=()=>{
        ReactDOM.render(<AddTripComponent/>,document.getElementById("App"))
    }

    onClickListHandle=()=>{
        ReactDOM.render(<ListComponent/>,document.getElementById("App"))
    }

    render() {
        return (
                <div className="buttoncontainer">
                    <button className="button" onClick={this.onClickHomeHandle}>Home</button>
                    <button className="button" onClick={this.onClickAddHandle}>Add</button>
                    <button className="button" onClick={this.onClickListHandle}>List</button>
                </div>
        );
    }
}

export default ButtonComponent;