import * as types from './actionTypes';


export function addProductToCart(product) {
  return {
    type: types.ADD_PRODUCT_TO_CART, product
  };
}
