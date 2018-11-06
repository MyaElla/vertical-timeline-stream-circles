import React, { Component } from "react";
import Circles from "./Circles";
import Comments from "./Comments";

export default class CommentSection extends Component {
   
  render() {
      let rowComment
      if (this.props.updates) {
          rowComment = this.props.updates.map(update => {
            //   console.log(update)
            return(
                <Comments key={update.id} update={update}/>
            )
          })
      }
    return (
      <div>
        <section>
          <Circles />
                {rowComment}
        </section>
      </div>
    );
  }
}
