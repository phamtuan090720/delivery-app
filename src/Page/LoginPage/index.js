<<<<<<< HEAD
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import Icon from "@material-ui/core/Icon";
import TwitterIcon from "@material-ui/icons/Twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className="form-login">
      <Container className={classes.root} fixed style={{ display: "flex" }}>
        <div
          className={classes.paper}
          style={{ width: "50%", margin: "64px 80px" }}
        >
          <Typography className="h2-green-text" style={{fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#13a549',
    letterSpacing: '2px'}}
          >LOGIN</Typography>
          <form className={classes.form} Validate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              // variant="contained"
              type="submit"
              className=" btn-block bg-success text-white font-weight-bold"
              style={{
                background: "#13a549",
                color: "white",
                borderRadius: "50px 50px",
              }}
            >
              {" "}
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

            <p
              className="font-small text-right d-flex justify-content-center mb-3 pt-2"
              style={{
                color: "black",
                fontSize: "16px",
=======
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
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
                marginTop: "4px",
                textAlign: "center",
              }}
            >
<<<<<<< HEAD
              or
            </p>
          </form>

          <Button
            fullWidth
            className=" btn-block text-white font-weight-bold"
            style={{
              background: "#3b5998",
              color: "white",
              borderRadius: "50px 50px",
            }}
          >
            <Icon aria-label="facebook" style={{ color: "white" }}>
              <FacebookIcon style={{ marginBottom: "6px" }} />
            </Icon>
            <Typography style={{ fontSize: "smaller", margin: "1px 4px" }}>
              Login with facebook
            </Typography>
          </Button>

          <Button
            fullWidth
            className=" btn-block text-white font-weight-bold"
            style={{
              background: "#1da1f2",
              color: "white",
              borderRadius: "50px 50px",
              margin: "8px 8px",
            }}
          >
            <Icon aria-label="twitter" style={{ color: "white" }}>
              <TwitterIcon style={{ marginBottom: "6px", margin: "2px 0px" }} />
            </Icon>
            <Typography style={{ fontSize: "smaller", margin: "1px 4px" }}>
              Login with twitter
            </Typography>
          </Button>

          <Button
            fullWidth
            type="submit"
            className=" btn-block text-white font-weight-bold"
            style={{
              background: "#ea4335",
              color: "white",
              borderRadius: "50px 50px",
            }}
          >
            <FontAwesomeIcon
              icon={faGoogle}
              style={{
                marginBottom: "6px",
                margin: "2px 0px",
                fontSize: "20px",
              }}
            />
            <Typography style={{ fontSize: "smaller", margin: "1px 4px" }}>
              Login with Google
            </Typography>
          </Button>
        </div>

        <div className={classes.imgShipper} style={{ width: "50%" }}>
          <img src="./img/deliv.png" alt="shipper" style={{ width: "100%" }} />
        </div>
      </Container>
    </div>
  );
=======
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
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
}
