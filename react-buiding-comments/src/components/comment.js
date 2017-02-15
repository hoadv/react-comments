import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
        <div className="comment-container">
           <div className="comment-heading">
                <strong>{this.props.comment.from}</strong> <span className="text-muted">{this.props.comment.created}</span>
            </div>
            <div className="comment-body">
              {this.props.comment.message}
            </div>
        </div>
    );
  }
}

export default Comment;