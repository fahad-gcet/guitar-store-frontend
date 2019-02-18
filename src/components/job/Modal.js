import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import * as jobsActions from "../../actions/jobsActions";
import {connect} from "react-redux";


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.deleteJob = this.deleteJob.bind(this);
    this.handlejobTitleChange = this.handlejobTitleChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      showForm: false,
      jobTitle: "",
      editedId: ""
    };
  }

  handlejobTitleChange(e) {
    e.preventDefault();
    this.setState({jobTitle: e.target.value});
  }

  handleEditClick(e) {
    e.preventDefault();
    this.setState({
      showForm: true,
      jobTitle: e.target.getAttribute('data-value'),
      editedId: e.target.getAttribute('id')
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      showForm: false,
      jobTitle: null
    });
    this.props.actions.editJob(this.state.editedId, this.state.jobTitle);
  }

  deleteJob(e, id) {
    e.preventDefault();
    this.props.actions.deleteJob(id);
  }



  render() {
    const showHideClassName = this.props.showModal ? "modal display-block" : "modal display-none";
    const showHideFormClassName = this.state.showForm ? "display-block" : "display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.jobs.map(job =>
                <tr>
                  <td>{job.name}</td>
                  <td>
                    <a href="#" data-value={job.name} id={job.id} onClick={this.handleEditClick} className="btn btn-warning">EDIT</a>
                    <a href="#" onClick={e => this.deleteJob(e, job.id)} className="btn btn-danger">DELETE</a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <form className={showHideFormClassName} onSubmit={this.handleFormSubmit}>
            <input type="text" value={this.state.jobTitle} onChange={this.handlejobTitleChange} name="jobTitle"/>
            <input type="submit" className="btn btn-primary"/>
          </form>
        </section>
    </div>
    );
  }
}

Modal.propTypes = {
  jobs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    jobs: state.jobs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jobsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
