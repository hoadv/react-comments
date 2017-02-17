import React, { Component } from 'react';

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      replyingContent: undefined
    }
  }

  handleChange = (event) => {
    this.setState(
      {
        replyingContent: event.target.value
      }
    );
  }

  handleSubmit = () => {
    if (this.props.onSubmitReply) {
      this.props.onSubmitReply(this.state.replyingContent);
    }

    this.setState({
      replyingContent: undefined
    })
  }

  render() {
    return (
        <div className="comment-container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.replyingContent} onChange={this.handleChange}/>
            <input type="submit" value="Reply"/>
          </form>
          
        </div>
    );
  }
}

export default CommentInput;