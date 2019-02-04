import React from 'react';

import DummyText from '../common/DummyText';

class Cart extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">

            <table className="table product-table">

              <thead className="mdb-color lighten-5">
              <tr>
                <th></th>
                <th className="font-weight-bold">
                  <strong>Product</strong>
                </th>
                <th></th>
                <th className="font-weight-bold">
                  <strong>Price</strong>
                </th>
                <th className="font-weight-bold">
                  <strong>QTY</strong>
                </th>
                <th className="font-weight-bold">
                  <strong>Amount</strong>
                </th>
                <th></th>
              </tr>
              </thead>

              <tbody>

              <tr>
                <th scope="row">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
                    alt="" className="img-fluid z-depth-0"/>
                </th>
                <td>
                  <h5 className="mt-3">
                    <strong>iPhone</strong>
                  </h5>
                  <p className="text-muted">Apple</p>
                </td>
                <td></td>
                <td>$800</td>
                <td>
                  <input type="number" value="2" aria-label="Search"
                         className="form-control"/>
                </td>
                <td className="font-weight-bold">
                  <strong>$800</strong>
                </td>
                <td>
                  <button type="button" className="btn btn-sm btn-primary"
                          data-toggle="tooltip" data-placement="top"
                          title="Remove item">X
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg"
                    alt="" className="img-fluid z-depth-0"/>
                </th>
                <td>
                  <h5 className="mt-3">
                    <strong>Headphones</strong>
                  </h5>
                  <p className="text-muted">Sony</p>
                </td>
                <td></td>
                <td>$200</td>
                <td>
                  <input type="number" value="2" aria-label="Search"
                         className="form-control"/>
                </td>
                <td className="font-weight-bold">
                  <strong>$600</strong>
                </td>
                <td>
                  <button type="button" className="btn btn-sm btn-primary"
                          data-toggle="tooltip" data-placement="top"
                          title="Remove item">X
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                    alt="" className="img-fluid z-depth-0"/>
                </th>
                <td>
                  <h5 className="mt-3">
                    <strong>iPad Pro</strong>
                  </h5>
                  <p className="text-muted">Apple</p>
                </td>
                <td></td>
                <td>$600</td>
                <td>
                  <input type="number" value="2" aria-label="Search"
                         className="form-control"/>
                </td>
                <td className="font-weight-bold">
                  <strong>$1200</strong>
                </td>
                <td>
                  <button type="button" className="btn btn-sm btn-primary"
                          data-toggle="tooltip" data-placement="top"
                          title="Remove item">X
                  </button>
                </td>
              </tr>

              <tr>
                <td colSpan="3"></td>
                <td>
                  <h4 className="mt-2">
                    <strong>Total</strong>
                  </h4>
                </td>
                <td className="text-right">
                  <h4 className="mt-2">
                    <strong>$2600</strong>
                  </h4>
                </td>
                <td colSpan="3" className="text-right">
                  <button type="button"
                          className="btn btn-primary btn-rounded
                          completePurchaseBtn">Complete purchase
                    <i className="fas fa-angle-right right"></i>
                  </button>
                </td>
              </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    );
  }
}

export default Cart;
