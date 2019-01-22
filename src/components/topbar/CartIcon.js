import React, {PropTypes} from "react";
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions';


class CartIcon extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <Link to="/cart" className="nav-link waves-effect">
        <span
          className="badge red z-depth-1 mr-1">{this.props.cartCount}</span>
        <i className="fas fa-shopping-cart"></i>
        <span
          className="clearfix d-none d-sm-inline-block">Cart</span>
      </Link>
    );
  }
}

CartIcon.propTypes = {
  cartCount: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    cartCount: state.cart.cartCount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
