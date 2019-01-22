import React from 'react';

class SingleProduct extends React.Component {
  render() {
    return (
      <div>
        <div className="row wow fadeIn">

          <div className="col-md-6 mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg"
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
                <del>$200</del>
              </span>
                <span>$100</span>
              </p>

              <p className="lead font-weight-bold">Description</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dolor suscipit libero eos atque quia ipsa sint voluptatibus!
                Beatae sit assumenda asperiores iure at maxime atque
                repellendus
                maiores quia sapiente.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Et
                dolor suscipit libero eos atque quia ipsa sint voluptatibus!
                Beatae sit assumenda asperiores iure at maxime atque
                repellendus
                maiores quia sapiente.</p>

              {/*<form className="d-flex justify-content-left">*/}
              <input type="number" value="1" aria-label="Search"
                     className="form-control"/>
              <button className="btn btn-primary btn-md my-0 p">Add
                to cart
                <i className="fas fa-shopping-cart ml-1"></i>
              </button>

              {/*</form>*/}

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
              illo neque eum in laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              suscipit modi sapiente illo soluta odit voluptates,
              quibusdam officia. Neque quibusdam quas a quis porro? Molestias
              illo neque eum in laborumLorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              suscipit modi sapiente illo soluta odit voluptates,
              quibusdam officia. Neque quibusdam quas a quis porro? Molestias
              illo neque eum in laborum</p>
          </div>
        </div>
      </div>
    );
  }
}


export default SingleProduct;
