import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };

  getMyStorage = () => {
    let myCookieData = document.cookie.valueOf("Year");
    console.log(myCookieData);
    let myLocalStorageData = localStorage.getItem("Paragon");
    console.log(myLocalStorageData);
    let mySessionStorageData = sessionStorage.getItem("frontend");
    console.log(mySessionStorageData);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Create My Storage</button>
        <button onClick={this.getMyStorage}>Get My Storage</button>
      </div>
    );
  }
}

export default App;
