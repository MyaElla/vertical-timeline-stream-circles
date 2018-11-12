import React, { Component } from "react";
// import air from "./air.svg";

export default class Comments extends Component {
  render() {
    return (
      <li>
        {/* <img src={air} className="App-logo" alt="logo" /> */}
        {/* <span className="circle">{this.props.update.timestamp}</span> */}
        <span className="line" />
        {this.props.update.body}
      </li>
    );
  }
}
