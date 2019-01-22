import React from 'react';
import {Link} from 'react-router';

const ProductCard = () => {
  return (
    <Link to="product/1">
      <div className="card">
        <div className="view overlay">
          <img
            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
            className="card-img-top" alt=""/>
          <span>
            <div
              className="mask rgba-white-slight waves-effect waves-light"></div>
          </span>
        </div>

        <div className="card-body text-center">
          <span  className="grey-text">
            <h5>Shirt</h5>
          </span>
          <h5>
            <strong>
              <span href="" className="dark-grey-text">Denim shirt
                <span className="badge badge-pill danger-color">NEW</span>
              </span>
            </strong>
          </h5>

          <h4 className="font-weight-bold blue-text">
            <strong>120$</strong>
          </h4>

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
