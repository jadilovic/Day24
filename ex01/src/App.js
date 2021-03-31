import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {

  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>My Storage</button>
      </div>
    );
  }
}

export default App;
