import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="contact" component={Contact}/>
  </Route>
);
