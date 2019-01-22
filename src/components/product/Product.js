import React from 'react';
import ProductList from './ProductList';


class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>All Guitars</h2>
        <ProductList/>
      </div>
    );
  }
}

export default Product;
