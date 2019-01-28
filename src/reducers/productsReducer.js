import initialState from './initialState';
import * as types from '../actions/actionTypes';


export default function productsReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return Object.assign({}, state, {
        data: action.data.results,
        next: action.data.next
      });

    default:
      return state;
  }
}
