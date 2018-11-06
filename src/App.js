import React, { Component } from "react";
import "./App.css";
import CommentSection from "./components/CommentSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updates: [
        {
          id: 0,
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          timestamp: "18"
        },
        {
          id: 1,
          body:
            "Praesent lectus lacus, finibus eu quam ut, vestibulum tincidun justo.",
          timestamp: "25"
        },
        {
          id: 2,
          body: "Duis a aliquet ante. Etiam non aliquet quam.",
          timestamp: "37"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <CommentSection updates={this.state.updates} />
      </div>
    );
  }
}

export default App;
