import React, {PropTypes} from 'react';
import ProductCard from "../product/Product";
import {connect} from "react-redux";
import Modal from "./Modal";
import {bindActionCreators} from "redux";


class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  modalButtonClick(e) {
    e.preventDefault();
    this.setState({
      showModal: true
    });
  }


  render() {
    return (
      <div className="jumbotron">
        {/*<a href="#" onClick={e => this.deleteJob(e, 4)}>aaa</a>*/}
        <a href="#" className="btn btn-danger" onClick={e => this.modalButtonClick(e)}>
          Open Modal
        </a>
        <Modal showModal={this.state.showModal} />
      </div>
    );
  }
}



export default Job;
