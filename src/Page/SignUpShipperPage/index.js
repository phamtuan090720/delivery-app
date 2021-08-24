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
            <h2 style={{ color: "#13a549", textAlign: "center" }}>
              Create Your Account
            </h2>
          </Typography>
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
                id="identification "
                label="Identification "
                name="identification "
                autoComplete="identification "
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
                control={<Checkbox value="allowExtraEmails" color="success" />}
                label="Accept the cookies"
              />
            </Grid>
          </Grid>
          <Button
            className="text-white"
            type="submit"
            fullWidth
            variant="contained"
            style={{ marginBottom: "8px", background: "#13a549", color:"#fff" }}
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

        {/* <div
          className="header"
          style={{
            width: "25%",
            padding: "40px 62px",
            boxShadow: "rgb(0 0 0 / 10%) 0px 5px 25px 0px",
          }}
        >
          <h1>Tìm Việc Làm Không Khó Đã Có Deliverra Lo!</h1>
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
    </div>
  );
}
