import {
    UPDATE_CATEGORIES
} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return Object.assign({}, state, {
        categories: action.data
      });
    default:
      return state;
  }
}