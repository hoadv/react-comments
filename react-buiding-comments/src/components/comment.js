import React, { Component } from 'react';
import CommentInput from './comment-input';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      showCmInput: false
    }
    // this.showCommentInput = this.showCommentInput.bind(this);
    // this.handleReply = this.handleReply.bind(this);
  }

  showCommentInput = (event) => {
    if (this.state.showCmInput) {
      this.setState({showCmInput: false});
      return;
    }

    this.setState({showCmInput: true});
  }

  handleReplyFromInputComment = (mess) => {
    this.setState({showCmInput: false});
    if (this.props.onSubmitReply) {
      this.props.onSubmitReply(this.props.comment, mess);
    }
  }

  render() {
    return (
        <div>
          <div className="comment-container">
           <div className="comment-heading">
                <strong>{this.props.comment.from}</strong> <span className="text-muted">{this.props.comment.created}</span>
            </div>
            <div className="comment-body">
              {this.props.comment.message}
            </div>
            <div className="comment-footer">
              <a href="#" onClick={this.showCommentInput}>{this.state.showCmInput ? "Hide" : "Reply"}</a>
            </div>
          </div>
          {this.state.showCmInput && <CommentInput onSubmitReply={this.handleReplyFromInputComment}/>}
        </div>
    );
  }
}

export default Comment;