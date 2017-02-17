import React, { Component } from 'react';
import CommentList from './comment-list';
import DataSource from '../services/data-source.service';
// import _ from 'lodash';

let dataSource = new DataSource();
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {comments: []};
  }

  componentDidMount() {
    dataSource.getProductListTest('').then(data => {
      console.log(data);
      // let rs =  _.sortBy(data, [function(c) { return c.created; }]);
      this.setState({comments: data.posts});
    });
  }

  componentWillUnmount() {
  }

  handleReplyFromCommentList = (comment, replyMess) => {
    const replyObj = { ...comment};
    let childCount = 0;
    if (replyObj.replies) {
      childCount = replyObj.replies.length;
      replyObj.replies = [];
    }
    replyObj.id = childCount + 1;
    replyObj.from = localStorage.username;
    replyObj.message = replyMess;
    replyObj.created = new Date().toLocaleString('en-US', {hour12: false});
    if (!comment.replies) {
      comment.replies = [];
    }

    comment.replies.push(replyObj);
    this.setState({comments: this.state.comments});
  }
  render() {
    return <CommentList comments={this.state.comments} onSubmitReply={this.handleReplyFromCommentList}/>;
  }
}

export default Home;