import React, { Component } from "react";
//import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";

class ProjectDetails extends Component {
  componentDidMount() {
    if (this.props.match.params.projectId === this.props.lists.projectId) {
      console.log("projectId match successfully");
    }
  }
  render() {
    return (
      <div>
        Project Details
        {/*this.props.lists.map((list) => (
          <ListGroup as="ul" key={list.projectId} className="list-style">
            <ListGroup.Item as="li" active>
              Project Name: {list.projectName}
            </ListGroup.Item>
          </ListGroup>
        ))*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps, null)(ProjectDetails);
