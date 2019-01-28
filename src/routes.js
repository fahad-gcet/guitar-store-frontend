import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import SingleProduct from './components/product/SingleProduct';
import Product from "./components/product/Product";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Product}/>
    <Route path="contact" component={Contact}/>
    <Route path="cart" component={Cart}/>
    <Route path="product/:id" component={SingleProduct}/>
  </Route>
);
