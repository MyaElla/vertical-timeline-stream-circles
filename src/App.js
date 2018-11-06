import React, { Component } from "react";
import "./App.css";
import Circles from "./components/Circles/Circles";
import Comments from "./components/Comments/Comments";
class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Circles />
          <Comments />
        </section>
      </div>
    );
  }
}

export default App;
