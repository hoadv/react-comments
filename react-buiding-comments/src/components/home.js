import React, { Component } from 'react';
import CommentList from './comment-list';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          id: "Lionel_20151103131315",
          from: "Lionel",
          message: "iPhone 6s is really cool!",
          created: "2015-11-03T13:13:15+0000",
          replies: [
            {
              from: "Marie",
              message: "Really?",
              created: "2015-11-15T23:59:26+0000",
               replies: [
                {
                  from: "Lionel",
                  message: "Yes",
                  created: "2015-11-15T23:59:26+0000"
                }]
            },
            {
              from: "Hoa",
              message: "Oh",
              created: "2015-11-15T23:59:26+0000"
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }
  render() {
    return (
      <div>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default Home;