import React, { Component } from "react";

export default class Comments extends Component {
  render() {
    return (
      <li>
        <span className="circle">{this.props.update.timestamp}</span>
        <span className="line" />
        {this.props.update.body}
      </li>
    );
  }
}
