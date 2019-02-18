import {combineReducers} from 'redux';
import cart from './cartReducer';
import user from './userReducer';
import products from './productsReducer';
import jobs from './jobsReducer';


const rootReducer = combineReducers({
  user,
  cart,
  products,
  jobs
});

export default rootReducer;
