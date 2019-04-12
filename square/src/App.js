import React, { Component } from "react";
import "./style/App.css";
import Nav from "./components/nav";
import Shape from "./components/square";

// App combines the various elements in 1 div

class App extends Component {
  render() {
    return (
      <div>
        {<Nav />}
        {<Shape />}
        <h1>something</h1>
      </div>
    );
  }
}

export default App;
