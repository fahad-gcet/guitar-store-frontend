import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import './styles/app.css';
import configureStore from './store/configureStore'; // eslint-disable-line import/default

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
