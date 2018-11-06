import React, { Component } from "react";

export default class Comments extends Component {
  render() {
    return (

        <li className="RowComment">
          {this.props.update.body}
        </li>
    
    );
  }
}
