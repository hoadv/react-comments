import React, { Component } from 'react';
import CommentList from './comment-list';
import DataSource from '../services/data-source.service';
import _ from 'lodash';

let dataSource = new DataSource();
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {comments: []};
    // this.state = {
    //   comments: [
    //     {
    //       id: "Lionel_20151103131315",
    //       from: "Lionel",
    //       message: "iPhone 6s is really cool!",
    //       created: "2015-11-03T13:13:15+0000",
    //       replies: [
    //         {
    //           from: "Marie",
    //           message: "Really?",
    //           created: "2015-11-15T23:59:26+0000",
    //            replies: [
    //             {
    //               from: "Lionel",
    //               message: "Yes",
    //               created: "2015-11-15T23:59:26+0000"
    //             }]
    //         },
    //         {
    //           from: "Hoa",
    //           message: "Oh",
    //           created: "2015-11-15T23:59:26+0000"
    //         }
    //       ]
    //     }
    //   ]
    // };
  }

  componentDidMount() {
    dataSource.getProductList('https://api.myjson.com/bins/15hmjh').then(data => {
      console.log(data);
      // let rs =  _.sortBy(data, [function(c) { return c.created; }]);
      this.setState({comments: data.posts});
    });
  }

  componentWillUnmount() {
  }
  render() {
    return (
      <div>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default Home;