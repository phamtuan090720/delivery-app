import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import HomeIcon from "@material-ui/icons/Home";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    overflowX: "hidden",
  },
  headingContact: {
    width: "100%",
    marginTop: "24px",
    marginBottom: "24px,",
  },
  title: {
    fontSize: "40px",
    marginLeft: "56px",
  },

  content: {
    width: "100%",
    maxWidth: "100%",
    fontFamily: "Lato",
    color: "black",
    height: "75vh",
    marginTop: "120px",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    padding: "12px 56px",
  },
  textfieldContact: {
    padding: "12px 0px",
  },
  footer: {
    background: "#182430",
  },
  titleFooter: {
    color: "#13a549",
  },

  titleFooterItems: {
    color: "#fff",
    fontSize: "12px",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function index() {
  const classes = styles();
  return (
    <section>
      <div></div>
      {/* <Container className={classes.root} fixed> */}
      <div className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <List component="nav">
              <ListItem>
                <ListItemIcon>
                  <BusinessOutlinedIcon style={{ color: "#13a549" }} />
                </ListItemIcon>
                <ListItemText primary="46 Võ Văn Tần, Quận 3, Thành Phố Hồ Chí Minh" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <DraftsOutlinedIcon style={{ color: "#13a549" }} />
                </ListItemIcon>
                <ListItemText primary="123@gmail.com" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <List component="nav">
              <ListItem>
                <ListItemIcon>
                  <HomeIcon style={{ color: "#13a549" }} />
                </ListItemIcon>
                <ListItemText primary="371 Nguyễn Kiệm , Gò Vấp, Thành Phố Hồ Chí Minh" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon style={{ color: "#13a549" }} />
                </ListItemIcon>
                <ListItemText primary="0123584555" />
              </ListItem>
            </List>
          </Grid>

          <Grid
            item
            xs={6}
            style={{
              boxShadow: "0px 5px 25px 0px rgb(0 0 0 / 10%)",
              transition:
                " background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
            }}
          >
            <Typography
              className="h2-green-text"
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#13a549",
                letterSpacing: "2px",
                textAlign: "center",
              }}
            >
              Viết Gì Đó Cho Chúng Tôi
            </Typography>
            <form className={classes.form}>
              <TextField
                className={classes.textfieldContact}
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                className={classes.textfieldContact}
                fullWidth
                variant="outlined"
                id="name"
                label="Your Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                className={classes.textfieldContact}
                style={{ fontSize: "xxx-large" }}
                fullWidth
                variant="outlined"
                id="messenger"
                label="Your Message"
                name="messenger"
                multiline
                rows={4}
                autoFocus
              />

              <Button
                fullWidth
                type="submit"
                className=" btn-block bg-success text-white font-weight-bold"
                style={{
                  color: "#ffffff",
                  backgroundColor: "#13A549",
                  borderStyle: "none",
                  borderRadius: "50px 50px 50px 50px",
                  boxShadow: "0px 0px 0px 0px rgb(66 133 244 / 30%)",
                  padding: "16px 52px",
                }}
              >
                <Typography>Gửi</Typography>
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>

      <div
        className={classes.footer}
        style={{ width: "100%", height: "75vh", marginTop: "40px" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={4} className={classes.titleFooter}>
            <Typography style={{ marginLeft: "12px" }}>Quick Links</Typography>
            <List className={classes.titleFooterItems}>
              <ListItemLink href="#">
                <ListItemText primary="About Us" />
              </ListItemLink>
              <ListItemLink href="#">
                <ListItemText primary="Become to partner" />
              </ListItemLink>
              <ListItemLink href="#simple-list">
                <ListItemText primary="Contact us" />
              </ListItemLink>
              <ListItemLink href="#simple-list">
                <ListItemText primary="Home" />
              </ListItemLink>
            </List>
          </Grid>

          <Grid item xs={4} className={classes.titleFooter}>
            <Typography style={{ marginLeft: "12px" }}>Useful Links</Typography>
            <List className={classes.titleFooterItems}>
              <ListItemLink href="#">
                <ListItemText primary="Privacy Policy" />
              </ListItemLink>
              <ListItemLink href="#">
                <ListItemText primary="Terms and Conditions" />
              </ListItemLink>
              <ListItemLink href="#simple-list">
                <ListItemText primary="Support" />
              </ListItemLink>
              <ListItemLink href="#simple-list">
                <ListItemText primary="FAQ" />
              </ListItemLink>
            </List>
          </Grid>
          <Grid item xs={4} className={classes.titleFooterItems}>
            <List component="nav">
              <ListItem>
                <ListItemIcon>
                  <HomeIcon style={{ color: "#13a549" }} />
                </ListItemIcon>
                <ListItemText primary="371 Nguyễn Kiệm , Gò Vấp, Thành Phố Hồ Chí Minh" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DraftsOutlinedIcon style={{ color: "#13a549" }} />
                </ListItemIcon>
                <ListItemText primary="123@gmail.com" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon style={{ color: "#13a549" }} />
                </ListItemIcon>
                <ListItemText primary="0123584555" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
