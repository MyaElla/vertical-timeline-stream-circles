import React, { Component } from "react";
import Comments from "./Comments";

export default class CommentSection extends Component {
  render() {
    let rowComment;
    if (this.props.updates) {
      rowComment = this.props.updates.map(update => {
        return <Comments key={update.id} update={update} />;
      });
    }
    return (
      <section>
        <div id="intro">
          <h1>Live commentary</h1>
        </div>
        <ul>{rowComment}</ul>
      </section>
    );
  }
}
