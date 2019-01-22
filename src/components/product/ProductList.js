import React from 'react';

import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <section className="text-center mb-4">


      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <ProductCard/>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <ProductCard/>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <ProductCard/>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <ProductCard/>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <ProductCard/>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <ProductCard/>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <ProductCard/>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <ProductCard/>
        </div>
      </div>


    </section>
  );
};

export default ProductList;
