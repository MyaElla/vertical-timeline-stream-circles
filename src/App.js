import React, { Component } from "react";
import "./App.css";
import Circles from "./components/Circles";
import Comments from "./components/Comments";
class App extends Component {
  constr
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
