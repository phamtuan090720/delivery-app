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
                marginTop: "4px",
                textAlign: "center",
              }}
            >
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
              <FacebookIcon style={{ marginBottom: "6px" , marginTop: '-17px'}} />
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
              <TwitterIcon style={{ marginBottom: "6px", margin: "2px 0px" , marginTop: '-17px'}} />
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
}
