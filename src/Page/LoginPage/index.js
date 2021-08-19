import { MDBIcon } from "mdbreact";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Modal from 'react-modal';

export default class Login extends Component {
  render() {
    // const { email, password } = this.state;
    return (
      <div className="container" width="100%">
        <div className="row">
          <div
            className="col-6"
            style={{
              borderRadius: "8%",
              boxShadow: "0px 5px 25px 0px rgb(0 0 0 / 10%)",
              padding: "2px 58px",
            }}
          >
            <div
              className="text-center"
              style={{
                marginBottom: "20px",
                marginTop: "60px",
                letterSpacing: "4px",
              }}
            >
              <h4 className="green-text">
                <strong>LOGIN</strong>
              </h4>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email or Phone number"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <p className="font-small blue-text d-flex justify-content-end pb-3" style={{marginBottom: "auto"}}>
                Forgot
                <a href="#!" className="blue-text ml-1">
                  {" "}
                  Password?
                </a>
              </p>

              <Button
                type="submit"
                className=" btn-block bg-success text-white font-weight-bold"
                style={{}}
              >
                {" "}
                Sign In
              </Button>
            </Form>

            <p
              className="font-small text-right d-flex justify-content-center mb-3 pt-2"
              style={{ color: "black", fontSize: "16px", marginTop: "4px" }}
            >
              or
            </p>
            <div
              className="social-login"
              style={{
                marginTop: "4px",
                textAlign: "center",
              }}
            >
              <Link
                to="#"
                className="face"
                style={{
                  color: "white",
                  textAlign: "center",
                  background: "#3B62A3",
                  padding: "12px",
                  borderRadius: "88%",
                  margin: "0 4px",
                }}
              >
                <MDBIcon fab icon="facebook-f"></MDBIcon>
              </Link>
              <Link
                to="#"
                className="twitter"
                style={{
                  color: "white",
                  textAlign: "center",
                  background: "#19B0E7",
                  padding: "12px",
                  borderRadius: "88%",
                  margin: "0 4px",
                }}
              >
                <MDBIcon fab icon="twitter"></MDBIcon>
              </Link>
              <Link
                to="#"
                className="google"
                style={{
                  color: "white",
                  textAlign: "center",
                  background: "#dd4b39",
                  padding: "12px",
                  borderRadius: "88%",
                  margin: "0 4px",
                }}
              >
                <MDBIcon fab icon="google"></MDBIcon>
              </Link>
            </div>

            {/* footer */}
            <p className="font-small grey-text d-flex justify-content-end">
              Not a member?
              <a href="#!" className="blue-text ml-1">
                Sign Up
              </a>
            </p>
          </div>
          {/* p2 */}
          <div className="col-6">
            <img
              src="./img/deliv.png"
              alt="imgShipper"
              style={{ width: "inherit" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
