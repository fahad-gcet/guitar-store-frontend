import React, {PropTypes} from 'react';

import ProductCard from './ProductCard';
import * as productsActions from "../../actions/productsActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.loadMoreProducts = this.loadMoreProducts.bind(this);
  }


  componentDidMount() {
    if (this.props.products.length === 0) {
      this.loadProducts();
    }
  }

  loadProducts() {
    this.props.actions.getProducts();
  }

  loadMoreProducts() {
    this.props.actions.getProducts(this.props.next);
  }

  render() {
    return (
      <div>
        <section className="text-center mb-4">
          <div className="row">
            {this.props.products.map(product =>
              <div className="col-lg-3 col-md-6 mb-4">
                <ProductCard product={product}/>
              </div>
            )}
          </div>
        </section>
        <div className="text-center">
          <button className="btn btn-primary"
                  onClick={this.loadMoreProducts}>Load More
          </button>
        </div>
      </div>
    );
  }
}


Product.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  next: PropTypes.string
};


function mapStateToProps(state) {
  return {
    products: state.products.data,
    next: state.products.next
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);
