import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as cartActions from '../../actions/cartActions';
import axios from "axios";
import {PRODUCTS_URL} from "../../config";
import {spinnerService} from "@chevtek/react-spinners";

class SingleProduct extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      productData: {
        name: "",
        price: "",
        image_url: "",
        description: ""
      }
    };
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  componentDidMount() {
    const {id} = this.props.params;
    spinnerService.show('mySpinner');
    axios.get(PRODUCTS_URL + id + '/').then((data) => {
      this.setState({productData: data.data});
      spinnerService.hide('mySpinner');
    }).catch(
      error => {
        spinnerService.hide('mySpinner');
        throw(error);
      }
    );
  }

  addProductToCart(event) {
    this.props.actions.addProductToCart();
  }

  render() {
    const {productData} = this.state;
    return (
      <div>
        <div className="row wow fadeIn">

          <div className="col-md-6 mb-4">
            <img
              src={productData.image_url}
              className="img-fluid" alt=""/>
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4">
              <div className="mb-3">
                <a href="#">
                  <span className="badge purple mr-1">Category 2</span>
                </a>
                <a href="#">
                  <span className="badge blue mr-1">New</span>
                </a>
                <a href="#">
                  <span className="badge red mr-1">Bestseller</span>
                </a>
              </div>

              <p className="lead">
              <span className="mr-1">
                <del>$1000</del>
              </span>
                <span>${productData.price}</span>
              </p>

              <p className="lead font-weight-bold">Description</p>

              <p>{productData.description}</p>

              <button onClick={this.addProductToCart}
                      className="btn btn-primary btn-md my-0 p">Add
                to cart
                <i className="fas fa-shopping-cart ml-1"></i>
              </button>


            </div>

          </div>

        </div>
        <hr/>
        <div className="row d-flex justify-content-center wow fadeIn">
          <div className="col-md-6 text-center">
            <h4 className="my-4 h4">Additional information</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              suscipit modi sapiente illo soluta odit voluptates,
              quibusdam officia. Neque quibusdam quas a quis porro? Molestias
              illo neque eum in laborum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Natus
              suscipit modi sapiente illo soluta odit voluptates,
              quibusdam officia. Neque quibusdam quas a quis porro? Molestias
              illo neque eum in laborumLorem ipsum dolor sit amet consectetur
              adipisicing elit. Natus
              suscipit modi sapiente illo soluta odit voluptates,
              quibusdam officia. Neque quibusdam quas a quis porro? Molestias
              illo neque eum in laborum</p>
          </div>
        </div>
      </div>
    );
  }
}

SingleProduct.propTypes = {
  actions: PropTypes.object.isRequired

};

function mapStateToProps(state, ownProps) {
  return {
    cartCount: 99
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
