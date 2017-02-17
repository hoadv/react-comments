let instance = null;

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

  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }
}