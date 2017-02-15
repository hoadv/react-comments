import React, { Component } from 'react';

import Comment from './comment';

class CommentList extends Component {
  render() {
    return (
      <div>
        {this.props.comments.map((comment) => (
          <div>
            <div>
              <Comment comment={comment} key={comment.id} />
            </div>
            <div className="replay-container">
              {comment.replies && <CommentList comments={comment.replies}/>}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CommentList;