import Frisbee from 'frisbee';

class XcartApi {
  constructor(params) {
    this.endpoint = 'https://mobile.x-cart.com'
    this.path = '/cart.php'
    this.target = 'catalog_json_api'
    this.apiKey = params['api_key']
    this.lng = params['lng']
    this.client = new Frisbee({
      baseURI: this.endpoint,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

  getCategories() {
    let route = this.getRoutes()['categories'];

    return this.performRequest(route).then(function(response) {
      return response.body.data;
    });
  }

  getProducts(categoryId, offset = 0, length = 6) {
    let route = this.getRoutes()['products'];

    return this.performRequest(route, {
      data: {
        category_id: categoryId,
        from: offset,
        size: length
      }
    }).then(function(response) {
      return response.body.data;
    });
  }

  performRequest(route, params = {}) {
    let queryParams = Object.assign({
      'target': this.target,
      'lng': this.lng,
      'api_key': this.apiKey,
      'route': route
    }, params);

    return this.client
      .get(this.path, {
        body: queryParams
      })
      .catch(() => {
        console.error(arguments);
      })
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

export default instance = new XcartApi(params);