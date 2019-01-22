import React from "react";
import {Link} from 'react-router';


class CartIcon extends React.Component {
  render() {
    return (
      <Link to="/cart" className="nav-link waves-effect">
        <span className="badge red z-depth-1 mr-1">1</span>
        <i className="fas fa-shopping-cart"></i>
        <span
          className="clearfix d-none d-sm-inline-block">Cart</span>
      </Link>
    );
  }
}

export default CartIcon;
