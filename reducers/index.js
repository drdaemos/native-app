import {
    UPDATE_CATEGORIES,
    UPDATE_PRODUCTS
} from '../actions';

let initialState = {
    categories: null,
    products: null
}

function unique(array, propertyName) {
  return array.filter((e, i) => array.findIndex(a => a[propertyName] === e[propertyName]) === i);
}

function products(state = [], action) {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            let current = state && state[action.categoryId] 
                ? state[action.categoryId] 
                : [];
            let list = action.data instanceof Array ? current.concat(action.data) : current
            let updated = {
                [action.categoryId]: unique(list, 'product_id')
            };

            return Object.assign(state || {}, updated);
        default:
            return state;
    }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return Object.assign({}, state, {
        products: products(state.products, action)
      })

    case UPDATE_CATEGORIES:
      return Object.assign({}, state, {
        categories: action.data
      })

    default:
      return state;
  }
}