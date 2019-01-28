import {combineReducers} from 'redux';
import cart from './cartReducer';
import user from './userReducer';
import products from './productsReducer';


const rootReducer = combineReducers({
  user,
  cart,
  products
});

export default rootReducer;
