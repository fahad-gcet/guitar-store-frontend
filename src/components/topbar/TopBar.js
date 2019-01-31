import React, {PropTypes} from 'react';
import {IndexLink, Link} from 'react-router';

import {APP_NAME} from '../../config';
import ProductSearchForm from './ProductSearchForm';
import CartIcon from './CartIcon';
import {connect} from "react-redux";


const TopBar = (props) => (
  <div>
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
      <div className="container">
        {/*Brand*/}
        <IndexLink className="navbar-brand waves-effect" to="/"><strong
          className="blue-text">{props.isLoggedIn}</strong></IndexLink>

        {/*Collapse*/}
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*Links*/}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/*Left*/}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <IndexLink className="nav-link waves-effect"
                         to="/" activeClassName="active">Home</IndexLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link waves-effect"
                    to="/contact" activeClassName="active">Contact</Link>
            </li>
          </ul>

          <ProductSearchForm/>

          {/*Right*/}
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <CartIcon cartCount={0}/>
            </li>
            <li
              className={`nav-item ${props.isLoggedIn ? 'hidden' : ''}`}>
              <Link to="/login" activeClassName="active">
                <button className="btn btn-primary btn-sm">Login</button>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </div>
);

TopBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(mapStateToProps)(TopBar);
