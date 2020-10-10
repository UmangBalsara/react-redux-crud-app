import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      address: "",
      city: "surat",
      details: [],
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSelectHandler = (e) => {
    this.setState(
      {
        city: e.target.value,
      },
      () => {}
    );
  };

  onClickHandler(e) {
    e.preventDefault();

    const formObject = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      city: this.state.city,
    };

    localStorage.setItem("signupdata", JSON.stringify(formObject));
    //let data = JSON.parse(localStorage.getItem("signupdata"));
    //console.log(data);
    //return data;

    this.setState({
      username: "",
      email: "",
      password: "",
      address: "",
      city: "",
    });
    alert("Your account created successfully...");
  }
  render() {
    return (
      <Form className="signup-form-style">
        <h2 className="h2-style">SignUp</h2>

        <Form.Group controlId="formBasicUsername">
          <Form.Label className="label-style1">Username</Form.Label>
          <Form.Control
            className="input-modal-style"
            type="text"
            placeholder="Enter name"
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="label-style">Email address</Form.Label>
          <Form.Control
            className="input-modal-style"
            type="email"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="label-style1">Password</Form.Label>
          <Form.Control
            className="input-modal-style"
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="on"
            value={this.state.password}
            onChange={this.onChangeHandler}
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label className="label-style3">Address</Form.Label>
          <Form.Control
            className="input-modal-style"
            placeholder="1234 Main St"
            name="address"
            value={this.state.address}
            onChange={this.onChangeHandler}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="label-style2">City</Form.Label>
          <Form.Control
            className="input-modal-style"
            as="select"
            defaultValue={this.state.city}
            onChange={this.onSelectHandler}
          >
            <option value="">Choose...</option>
            <option value="navsari">Navsari</option>
            <option value="valsad">Valsad</option>
            <option value="surat">Surat</option>
            <option value="bharuch">Bharuch</option>
          </Form.Control>
        </Form.Group>

        <Button
          variant="primary"
          onClick={(e) => {
            this.onClickHandler(e);
          }}
        >
          SignUp
        </Button>

        <Link to="/login" className="link-login-style">
          Login
        </Link>
      </Form>
    );
  }
}

export default Signup;
