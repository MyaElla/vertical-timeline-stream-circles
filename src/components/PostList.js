import React, { Component } from "react";
import PostData from "../data/posts.json";

class PostList extends Component {
  render() {
    return (
      <div>
        {PostData.map((postDetail, index) => {
          return (
            <div>
              <h1>{postDetail.timestamp}</h1>
              <p>{postDetail.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostList;
