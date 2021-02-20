import React, { Component } from 'react';
import ButtonComponent from "./ButtonComponent.jsx";
import ListService from "./ListService.js"
import ReactDOM from 'react-dom'
import "./ListComponent.css"

class ListComponent extends Component {
    constructor() {
        super();
        this.items=[]
      }
    componentDidMount(){
        this.items=ListService.sharedData
        this.renderOutput()
    }

    renderOutput(){
        const mapRows = this.items.map(item=>{
            return <tr>
                        <td>{item.Date}</td>
                        <td>{item.Place}</td>
                        <td>{item.Type}</td>
                    </tr>
        })
        let variable= <table id="list" className="list">
                        <tr>
                            <th>Date</th>
                            <th>Place</th>
                            <th>Type</th>
                        </tr>
                        {mapRows}
                        </table>
        ReactDOM.render(variable,document.getElementById("table"))
    }

    OnClickRadioHandler=(event)=>{
        let value=event.target.value
        let NewList= this.items.filter(item=>{
            if(item.Type == value)
                return item
        })
        const mapRows = NewList.map(item=>{
            return <tr>
                        <td>{item.Date}</td>
                        <td>{item.Place}</td>
                        <td>{item.Type}</td>
                    </tr>
        })
        let variable= <table id="list" className="list">
                        <tr>
                            <th>Date</th>
                            <th>Place</th>
                            <th>Type</th>
                        </tr>
                        {mapRows}
                        </table>
        ReactDOM.render(variable,document.getElementById("table"))

    }

    render() {
        return (
            <div className="mainconatiner">
                <ButtonComponent></ButtonComponent>
                <div className="container">
                    <header>All Trips</header>
                    <div className="table" id="table">
                    </div>
                    <div className="filter">
                        <label>Filter By:</label>
                        <input className="input2" type="radio" onClick={this.OnClickRadioHandler} value="Trek"></input>
                        <label>Trek</label>
                        <input className="input2" type="radio" onClick={this.OnClickRadioHandler} value="Tropic"></input>
                        <label>Tropic</label>
                        <input className="input2" type="radio" onClick={this.OnClickRadioHandler} value="Club"></input>
                        <label>Club</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListComponent;