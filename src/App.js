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
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          timestamp: "12"
        },
        {
          id: 1,
          body:
            "Etiam pretium orci nisi, ut malesuada neque imperdiet ut. Vestibulum blandit vehicula nunc, sit amet tempus urna fringilla eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat iaculis risus, ac tincidunt turpis efficitur vel. Pellentesque tellus tellus, vehicula id sagittis eu, lobortis eu odio.",
          timestamp: "14"
        },
        {
          id: 2,
          body: "Duis a aliquet ante. Etiam non aliquet quam.",
          timestamp: "17"
        },
        {
          id: 3,
          body:
            "Curabitur vitae efficitur ante. Nunc ornare dui dui, sed aliquam dui pulvinar at. Ut tristique purus at sem blandit, a auctor erat facilisis. Mauris et congue lorem. Ut sit amet dapibus dolor. Curabitur eget ex blandit, egestas nisl quis, blandit lorem. Etiam vitae sapien et augue imperdiet ornare vitae id nisl.",
          timestamp: "21"
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
