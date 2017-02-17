let instance = null;
let products = {
  posts: [
    {
      id: "Lionel_20151103131315",
      from: "Lionel",
      message: "iPhone 6s is really cool!",
      created: "2015-11-03T13:13:15+0000",
      replies: [
        {
          id: "0",
          from: "Marie",
          message: "Really?",
          created: "2015-11-15T14:00:26+0000",
          replies: [
            {
              id: "1",
              from: "Lionel",
              message: "Yes",
              created: "2015-11-15T14:04:26+0000"
            }]
        },
        {
          id: "2",
          from: "Hoa",
          message: "Oh",
          created: "2015-11-15T15:59:26+0000"
        }
      ]
    }
  ]
};
export default class DataSource {
  getProductList(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getProductListTest(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        return products;
      });
  }

  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }
}