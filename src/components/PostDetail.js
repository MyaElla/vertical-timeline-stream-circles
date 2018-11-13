import React, { Component } from "react";


class PostDetail extends Component {
    render() {
        const {post} =this.props
        return (
            <div>
                <h1>{post.timestamp}</h1>
                <p>{post.body}</p>
            </div>
        );
    }
}

export default PostDetail;
