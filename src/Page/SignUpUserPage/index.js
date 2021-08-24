import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

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
      className="form-sign-up-user"
      style={{
        width: "100vw",
        height: "90vh",
        background: "url(../img/bgwhite.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        className={classes.root}
        fixed
        style={{ display: "flex", width: "100%" }}
      >
        <div
          className={classes.paper}
          // style={{ width: "50%", margin: "64px 80px" }}
        ></div>
        {/* <Typography className="h1"> */}
          <h1
            style={{
              margin: "112px 112px",

              marginTop: "112px",
            }}
          >
            Kinh Doanh Trở Nên Dễ Dàng Với Deliverra, Nào Tham Gia Ngay Thôi!!
          </h1>
        {/* </Typography> */}

        <form
          style={{
            width: "75%",
            padding: "0px 70px",
            boxShadow: "#13a549 0px 5px 25px 0px",
            //  width: "49.999%",
            marginTop: "20px",

            background: "snow",
            borderRadius: "30px",
          }}
        >
          {/* <Typography> */}
            <h2 style={{ color: "#13a549", textAlign: "center", margin:"20px 20px" }}>
              Create Your Account
            </h2>
          {/* </Typography> */}
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
                type="password"
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
                type="password"
                id="Confirm Password"
                label="Confirm Password"
                name="confirmpassword"
                autoComplete="cpassword"
                size="small"
              />
            </Grid>

            <Grid container justifyContent="flex-end">
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Accept the cookies"
              />
            </Grid>
          </Grid>
          <Button
            className="text-white"
            type="submit"
            fullWidth
            variant="contained"
            style={{ marginBottom: "8px",background:'#13a549', color:'#fff' }}
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

        



      </Container>
    </div>
  );
}
