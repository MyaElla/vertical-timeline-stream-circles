import React, { Component } from "react";
import Comments from "./Comments";

export default class CommentSection extends Component {
  render() {
    let rowComment;
    if (this.props.updates) {
      rowComment = this.props.updates.map(update => {
        //   console.log(update)
        return <Comments key={update.id} update={update} />;
      });
    }
    return (
     
        <section>
            <h1>Live commentary</h1>
          <ul>{rowComment}</ul>
        </section>

    );
  }
}
