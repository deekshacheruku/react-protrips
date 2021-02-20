import React from 'react';
import HomeComponent from "./components/HomeComponent.jsx";
import AddTripComponent from "./components/AddTripComponent.jsx";
import ListComponent from "./components/ListComponent.jsx";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeComponent}/>
          <Route path="/add" component={AddTripComponent}/>
          <Route path="/list" component={ListComponent}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
