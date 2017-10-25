var http = require('request-promise');

class XcartApi {
  constructor(params) {
    this.endpoint = 'https://mobile.x-cart.com/cart.php'
    this.target = 'catalog_json_api'
    this.apiKey = params['api_key']
    this.lng = params['lng']
  }

  getCategories() {
    let route = this.getRoutes()['categories'];

    return performRequest(route);
  }

  getProducts(categoryId, offset = 0, length = 6) {
    let route = this.getRoutes()['products'];

    return performRequest(route, {
      'category_id': categoryId,
      'from': offset,
      'size': length
    });
  }

  performRequest(route, params = {}) {
    let queryParams = Object.assign({
      'target': this.target,
      'lng': this.lng,
      'api_key': this.apiKey,
      'route': route
    }, params);

    return request({
      uri: this.endpoint,
      qs: queryParams,
      json: true
    });
  }

  getRoutes() {
    return {
      'categories': 'Customer/Categories/Catalog',
      'products': 'Customer/Products'
    };
  }
}

let params = {
  'api_key': 'QWEQWEQWE',
  'lng': 'en'
}

let instance = new XcartApi(params)

export default instance;