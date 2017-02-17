import React, { Component } from 'react';

import Comment from './comment';

class CommentList extends Component {
  handleReplyFromComment = (comment, replyMess) => {
    if (this.props.onSubmitReply) {
      this.props.onSubmitReply(comment, replyMess);
    }
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment) => (
          <div>
            <div>
              <Comment comment={comment} key={comment.id} onSubmitReply={this.handleReplyFromComment} />
            </div>
            <div className="replay-container">
              {comment.replies && <CommentList comments={comment.replies} onSubmitReply={this.handleReplyFromComment} />}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CommentList;