import React, { Component } from "react";
import "../../App.css";

export default class Circles extends Component {
  render() {
    let time = new Date().getMinutes();
    return (
      <div>
        <div className="circle">{time}'</div>
        <div className="circle">{time}'</div>
        <div className="circle">{time}'</div>
      </div>
    );
  }
}
