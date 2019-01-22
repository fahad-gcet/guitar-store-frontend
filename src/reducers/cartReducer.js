import initialState from './initialState';
import * as types from '../actions/actionTypes';


export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return [state.cartCount + 1];
    default:
      return state;
  }
}
