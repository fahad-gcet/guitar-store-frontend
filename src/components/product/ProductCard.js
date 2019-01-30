import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProductCard = (product) => {
  return (
    <Link to={`product/${product.product.id}`}>
      <div className="card">
        <div className="view overlay">
          <img
            src={product.product.image_url}
            className="card-img-top" alt=""/>
          <span>
            <div
              className="mask rgba-white-slight waves-effect waves-light"></div>
          </span>
        </div>

        <div className="card-body text-center">
          <span className="grey-text">
            <h5>{product.product.brand_name}</h5>
          </span>
          <h5>
            <strong>
              <span href="" className="dark-grey-text">{product.product.name}
                <span className="badge badge-pill danger-color">NEW</span>
              </span>
            </strong>
          </h5>

          <h4 className="font-weight-bold blue-text">
            <strong>{product.product.price}$</strong>
          </h4>

        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
