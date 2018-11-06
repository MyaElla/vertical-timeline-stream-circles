import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    let time = new Date().getMinutes();
    return <div className="App">
        <section>
          <div className="row">
            <div className="circle">{time}'</div>
          </div>

          <div className="circle">{time}'</div>
          <div className="circle">{time}'</div>
          <div className="row">
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum congue, magna a bibend.{" "}
            </div>
          </div>

          <div className="row">
            <div className="outer" />
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum congue, magna a bibend.{" "}
            </div>
          </div>
        </section>
      </div>;
  }
}

export default App;
