import React from "react";
<<<<<<< HEAD
import Button from "@material-ui/core/Button";
=======
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
<<<<<<< HEAD
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const s = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function index() {
  const classes = s();
  return (
    <div
      className="form-sign-up-shipper"
  
    >
      <Container
        className={classes.root}
        fixed
        style={{ display: "flex", width: "100%" }}
      >
        <form
          style={{
            width: "50%",
            float: "right",
            padding: "0px 70px",
            borderRadius: "30px",
          }}
        >
          <Typography>
            <h1 style={{ color: "#13a549", textAlign: "center" }}>
              Create Your Account
            </h1>
          </Typography>
=======
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import { Form } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Image from "@material-ui/icons/Image";
import { Typography } from "@material-ui/core";

export default function index() {
  return (
    <div className="row">
      <div
        className="col-6"
        style={{
          borderRadius: "6%",
          boxShadow: "0px 5px 25px 0px rgb(0 0 0 / 10%)",
          padding: "35px 15px 35px 15px",
        }}
      >
        <div
            className="text-center"
            // style={{
            //   // marginBottom: "20px",
            //   // marginTop: "60px",
              // letterSpacing: "4px",
            // }}
          >
            <h4 className="green-text">
              <strong>Create Your Account</strong>
            </h4>
          </div>
        <form style={{ padding: "20px 40px 20px 40px" }}>
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
          <Grid container spacing={1} style={{ padding: "4 4px" }}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                size="small"
<<<<<<< HEAD
=======
                defaultValue="Success"
                
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
<<<<<<< HEAD
                id="Phone Number"
                label="Phone Number"
                name="phonenumber"
                autoComplete="pnumber"
                size="small"
              />
            </Grid>
=======
                id="identification "
                label="Identification "
                name="identification "
                autoComplete="identification "
                size="small"
              />
            </Grid>

>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
<<<<<<< HEAD
                id="Email"
                label="Email"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>

=======
                id="Phone Number"
                label="Phone Number"
                name="phonenumber"
                autoComplete="pnumber"
                size="small"
              />
            </Grid>
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
<<<<<<< HEAD
                id="identification "
                label="Identification "
                name="identification "
                autoComplete="identification "
=======
                id="Email"
                label="Email"
                name="email"
                autoComplete="email"
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="lastName"
                autoComplete="username"
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
<<<<<<< HEAD
                type="password"
=======
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
                id="Password"
                label="Password"
                name="Password"
                autoComplete="Password"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
<<<<<<< HEAD
                type="password"
=======
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
                id="Confirm Password"
                label="Confirm Password"
                name="confirmpassword"
                autoComplete="cpassword"
                size="small"
              />
            </Grid>

            <Grid item xs={12} style={{ border: "#49505759 solid 1px" }}>
              <input
                className="upload-img"
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                style={{ display: "none" }}
              />

              <Button variant="contained" color="#13a549" component="span">
                Upload Your Avatar
              </Button>

              <input
                accept="image/*"
                className="upload-img"
                id="icon-button-file"
                type="file"
                style={{ display: "none" }}
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="#13a549"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Grid>

            <Grid item justifyContent="flex-end">
              <FormControlLabel
<<<<<<< HEAD
                control={<Checkbox value="allowExtraEmails" color="success" />}
=======
                control={<Checkbox value="allowExtraEmails" color="primary" />}
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
                label="Accept the cookies"
              />
            </Grid>
          </Grid>
          <Button
<<<<<<< HEAD
            className="text-white"
            type="submit"
            fullWidth
            variant="contained"
            style={{ marginBottom: "8px", background: "#13a549", color:"#fff" }}
=======
            className="xs-6 bg-success text-white"
            type="submit"
            fullWidth
            variant="contained"
            // color="primary"
            style={{ marginBottom: "8px", borderRadius: "50px 50px 50px 50px" }}
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
          >
            Sign Up
          </Button>
          <Grid
            container
            justifyContent="flex-end"
            style={{ marginBottom: "12px" }}
          >
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
<<<<<<< HEAD

        {/* <div
          className="header"
          style={{
            width: "25%",
=======
      </div>

      <div className="col-6" style={{ width: "100%", padding: "40px 40px" }}>
        <div
          className="header"
          style={{
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
            padding: "40px 62px",
            boxShadow: "rgb(0 0 0 / 10%) 0px 5px 25px 0px",
          }}
        >
          <h1>Tìm Việc Làm Không Khó Đã Có Deliverra Lo!</h1>
<<<<<<< HEAD
          <span>
            Trở Thành Một Shipper Giao Hàng Chuyên Nghiệp cùng chúng tôi
          </span>
        </div>

        <div
          className="Requirements"
          style={{
            width: "25%",
            padding: " 72px 64px",
            boxShadow: "rgb(0 0 0 / 10%) 0px 5px 25px 0px",
          }}
        >
          <h1>Yêu cầu</h1>
          <ul style={{ listStyleType: "none" }}>
            <li className="check-icon-items">
              <span
                className="check-icon-list"
                style={{ color: "#13a549", padding: "4px 4px" }}
              >
                <i className="fas fa-check"></i>
              </span>
              <span className="check-icon-text">Bạn đã đủ 18 tuổi.</span>
            </li>

            <li className="check-icon-items">
              <span
                className="check-icon-list"
                style={{ color: "#13a549", padding: "4px 4px" }}
              >
                <i className="fas fa-check"></i>
              </span>
              <span className="check-icon-text">
                Có xe đi lại để thuận tiện hơn nè.
              </span>
            </li>
            <li className="check-icon-items">
              <span
                className="check-icon-list"
                style={{ color: "#13a549", padding: "4px 4px" }}
              >
                <i className="fas fa-check"></i>
              </span>
              <span className="check-icon-text">
                Quan trọng nên có giấy phép lái xe nhé.
              </span>
            </li>
          </ul> */}
        {/* </div> */}
      </Container>
=======
          <span>Trở Thành Một Shipper Giao Hàng Chuyên Nghiệp cùng chúng tôi</span>
        </div>
        <div
          className="Requirements"
          style={{
            padding: " 72px 64px",
            boxShadow: "rgb(0 0 0 / 10%) 0px 5px 25px 0px",
          }}
        >
          <h3>Yêu cầu</h3>
          <ul style={{ listStyleType: "none" }}>
            <li className="check-icon-items">
              <span
                className="check-icon-list"
                style={{ color: "#13a549", padding: "4px 4px" }}
              >
                <i className="fas fa-check"></i>
              </span>
              <span className="check-icon-text">Bạn đã đủ 18 tuổi.</span>
            </li>

            <li className="check-icon-items">
              <span
                className="check-icon-list"
                style={{ color: "#13a549", padding: "4px 4px" }}
              >
                <i className="fas fa-check"></i>
              </span>
              <span className="check-icon-text">
                Có xe đi lại để thuận tiện hơn nè.
              </span>
            </li>
            <li className="check-icon-items">
              <span
                className="check-icon-list"
                style={{ color: "#13a549", padding: "4px 4px" }}
              >
                <i className="fas fa-check"></i>
              </span>
              <span className="check-icon-text">
                Quan trọng nên có giấy phép lái xe nhé.
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="col-sm-4">hh</div> */}
>>>>>>> 8aefdf5f35010652bd75b080cdb1717f8b8def7a
    </div>
  );
}
