import React, {PropTypes} from 'react';

import ProductCard from './ProductCard';
import * as productsActions from "../../actions/productsActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as cartActions from "../../actions/cartActions";

class Product extends React.Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(productsActions.getProducts());
  }

  render() {
    return (
      <div>
        <section className="text-center mb-4">
          <div className="row">
            {this.props.products.map(product =>
              <div className="col-lg-3 col-md-6 mb-4">
                <ProductCard key={product.id} product={product}/>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}


Product.propTypes = {
  dispatch: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    products: state.products.data
  };
}


export default connect(mapStateToProps)(Product);
