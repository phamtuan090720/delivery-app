import React from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";



export default function index() {
  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "90vh",
        background: "url(../img/bgwhite.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row">
        <div classNam="col-6" style={{ padding: "24px 58px", width: "50%" }}>
          <h1 style={{ padding: "20px 12px", marginTop: "20px" }}>
            Kinh Doanh Trở Nên Dễ Dàng Với Deliverra, Nào Tham Gia Ngay Thôi!!
          </h1>

          <Icon
            className="fas fa-arrow-circle-right"
            style={{
              color: "green",
              fontSize: "60px",
              float: "right",
              marginRight: "210px",
            }}
          />
        </div>

        <div
          className="col-6"
          style={{
            padding: "0px 70px",
            boxShadow: "#13a549 0px 5px 25px 0px",
            width: "49.999%",
            marginTop: "20px",

            background: "snow",
            borderRadius: "30px",
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
              <strong>Create Your Account</strong>
            </h4>
          </div>
          <form>
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
                  id="Phone Number"
                  label="Phone Number"
                  name="phonenumber"
                  autoComplete="pnumber"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  name="email"
                  autoComplete="email"
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
                  id="Confirm Password"
                  label="Confirm Password"
                  name="confirmpassword"
                  autoComplete="cpassword"
                  size="small"
                />
              </Grid>




              <Grid item justifyContent="flex-end">
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Accept the cookies"
                />
              </Grid>
            </Grid>
            <Button
              className="bg-success text-white"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginBottom: "8px" }}
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
        </div>
      </div>
    </div>
  );
}






