import React, { Component } from "react";
import Circles from "./Circles";

export default class Comments extends Component {
  render() {
    return (
      
      <li value="1">
        {this.props.update.body}
      </li>
    );
  }
}
