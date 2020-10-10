import React, { Component } from "react";
import { Button, Modal, Form, ListGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";

class AddProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      projectId: "",
      projectName: "",
      clientName: "",
      priority: "low",
      flag: false,
      search: "",
    };
  }

  handleOpen = (e) => {
    e.preventDefault();
    this.setState({
      show: true,
    });
  };

  handleClose = (e) => {
    e.preventDefault();
    this.setState({
      show: false,
    });
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSelectHandler = (e) => {
    this.setState({
      priority: e.target.value,
    });
  };

  searchHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  onClickHandler(e) {
    e.preventDefault();

    const data = {
      projectId: uuidv4(),
      projectName: this.state.projectName,
      clientName: this.state.clientName,
      priority: this.state.priority,
    };
    this.props.dispatch({
      type: "ADD_PROJECT_LIST",
      payload: data,
    });

    this.setState({
      projectName: "",
      clientName: "",
      priority: "low",
      show: false,
    });
  }

  viewDetail = (e, list) => {
    e.preventDefault();
    //console.log(list);
    this.props.history.push({
      pathname: `/project/${list.projectId}`,
    });
  };

  onEdit = (e, list) => {
    e.preventDefault();
    //console.log(list);
    this.props.dispatch({
      type: "EDIT_LIST",
      payload: list,
    });

    this.setState({
      show: true,
      projectName: list.projectName,
      clientName: list.clientName,
      priority: list.priority,
      flag: true,
    });
  };

  onUpdate = (e) => {
    e.preventDefault();

    this.props.dispatch({
      type: "UPDATE_PROJECT",
      payload: {
        projectName: this.state.projectName,
        clientName: this.state.clientName,
        priority: this.state.priority,
      },
    });

    this.setState({
      show: false,
      flag: false,
      projectName: "",
      clientName: "",
      priority: "",
    });
  };

  onDelete = (e, i) => {
    e.preventDefault();
    //console.log(i);
    this.props.dispatch({
      type: "DELETE_PROJECT",
      id: i,
    });
  };

  onSearch = (e) => {
    e.preventDefault();
    this.props.dispatch({
      type: "SEARCH_PROJECT",
      value: this.state.search,
    });
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            className="input-search-style"
            type="text"
            placeholder="Search Project Name..."
            value={this.state.search}
            onChange={this.searchHandler}
          />
          <button
            className="btn-search-style"
            onClick={(e) => {
              this.onSearch(e);
            }}
          >
            Search
          </button>
        </form>
        <br />
        <Button variant="light" className="btn-style" onClick={this.handleOpen}>
          Add Projects
        </Button>
        <Modal show={this.state.show} className="modal-style">
          <Modal.Dialog className="modal-dialog-style">
            <Modal.Header>
              <Modal.Title className="modal-title-style">
                {this.state.flag ? "Update Project" : "Add Project"}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Control
                    className="input-modal-style"
                    type="text"
                    placeholder=" Enter Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className="input-modal-style"
                    type="text"
                    placeholder=" Enter Client Name"
                    name="clientName"
                    value={this.state.clientName}
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="form-lbl-style">
                    Select Priority
                  </Form.Label>
                  <Form.Control
                    className="input-modal-style"
                    as="select"
                    value={this.state.priority}
                    onChange={this.onSelectHandler}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>

            <Modal.Footer>
              {this.state.flag ? (
                <Button
                  className="modal-btn-style"
                  variant="outline-success"
                  onClick={(e) => {
                    this.onUpdate(e);
                  }}
                  disabled={!this.state.projectName || !this.state.clientName}
                >
                  Update
                </Button>
              ) : (
                <Button
                  className="modal-btn-style"
                  variant="outline-success"
                  onClick={(e) => {
                    this.onClickHandler(e);
                  }}
                  disabled={!this.state.projectName || !this.state.clientName}
                >
                  Add
                </Button>
              )}

              <Button
                variant="outline-danger"
                onClick={(e) => {
                  this.handleClose(e);
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
        <div>
          {this.props.lists.map((list, i) => (
            <ListGroup as="ul" key={list.projectId} className="list-style">
              <ListGroup.Item as="li" active>
                Project Name: {list.projectName}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Client Name: {list.clientName}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Priority is: {list.priority}
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Button
                  variant="outline-primary"
                  className="list-btn-style"
                  onClick={(e) => {
                    this.viewDetail(e, list);
                  }}
                >
                  View
                </Button>
                <Button
                  variant="outline-warning"
                  className="list-btn-style"
                  onClick={(e) => {
                    this.onEdit(e, list, i);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={(e) => {
                    this.onDelete(e, i);
                  }}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
