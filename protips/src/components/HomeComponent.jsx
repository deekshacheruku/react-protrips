import React, { Component } from 'react';
import ButtonComponent from "./ButtonComponent.jsx";
import "./HomeComponent.css"

class HomeComponent extends Component {
    render() {
        return (
            <div className="mainconatiner">
                <ButtonComponent></ButtonComponent>
                <div className="container">
                    <div className="nooftrips">
                        <p className="number">4</p>
                        <p>trips</p>
                    </div>
                    <div className="triptype">
                        <div className="subcontainer">
                            <p className="smallnumber">1</p>
                            <p>Tropic</p>
                        </div>
                        <div className="subcontainer">
                            <p className="smallnumber">2</p>
                            <p>Trek</p>
                        </div>
                        <div className="subcontainer">
                            <p className="smallnumber">1</p>
                            <p>Club</p>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="progressbar"></div>
                        <p>26%</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;