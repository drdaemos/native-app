var request = require('request');

class XcartApi {
  constructor(params) {
    this.endpoint = 'https://mobile.x-cart.com/cart.php'
    this.target = 'catalog_json_api'
    this.apiKey = params['api_key']
    this.lng = params['lng']
  }

  getCategories() {
    let route = this.getRoutes()['categories'];
  }

  getProducts(categoryId) {
    let route = this.getRoutes()['products'];
    let url = this.buildUrl(route, params);
  }

  buildUrl(route, params) {
    let queryParams = {
      'lng': this.lng,
      'api_key': this.apiKey,
      'route': route
    }
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