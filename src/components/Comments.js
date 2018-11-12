import React, { Component } from "react";
import CheckMark from "./CheckMark";


const styles = {
  extra: {
    zIndex: 2,
    paddingLeft: 10,
    backgroundColour: "red"
  }
};

export default class Comments extends Component {
  render() {
    return (
      <li>
        <CheckMark fill="purple" width={40} height={40} style={styles.extra} />
        {/* <span className="circle">{this.props.update.timestamp}</span> */}
        <span className="line" />
        <span className="text">
        {this.props.update.body} </span>
      </li>
    );
  }
}
