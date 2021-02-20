import React, { Component } from 'react';
import ButtonComponent from "./ButtonComponent.jsx";
import ListService from "./ListService.js"
import "./AddTripComponent.css";

class AddTripComponent extends Component {
    constructor(){
        super()
        this.List={}
    }

    OnChangeHandler= (event) =>{
        this.List[event.target.placeholder]=  event.target.value ;
    }

    OnClickHandler=(event) =>{
        this.List["Type"] =  event.target.value ;
    }

    OnSubmitHandler=(event)=>{
        event.preventDefault()
        ListService.sharedData.push(this.List)
        this.list={}
    }

    render() {
        return (
            <div className="mainconatiner">
                <ButtonComponent></ButtonComponent>
                <div className="formcontainer1">
                    <label className="header">Add a Trip</label>
                    <form className="formcontainer" onSubmit={this.OnSubmitHandler}>
                        <label>Date:</label>
                        <input className="input1" type="date" id="dateoftrip" placeholder="Date" onChange={this.OnChangeHandler}></input>
                        <label>Place:</label>
                        <input className="input1" type="text" id="place" placeholder="Place" onChange={this.OnChangeHandler}></input>
                        <label>Type:</label>
                        <select className="input" id="type" onClick={this.OnClickHandler}>
                            <option placeholder="Type">Trek</option>
                            <option placeholder="Type">Tropic</option>
                            <option placeholder="Type">Club</option>
                        </select>
                        <input type="submit" value="Submit" className="submitbutton"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTripComponent;