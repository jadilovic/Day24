import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  };

  getLocalStorage = () => {
    let myLocalStorageData = localStorage.getItem("Arena");
    console.log(myLocalStorageData);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>SET Local Storage</button>
        <button onClick={this.getLocalStorage}>GET Local Storage</button>
      </div>
    );
  }
}

export default App;
