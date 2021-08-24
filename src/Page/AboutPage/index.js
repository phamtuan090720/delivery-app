import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
// import { ClassSharp } from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
// import Icon from "@material-ui/core/Icon";
import PhoneIcon from "@material-ui/icons/Phone";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Divider from "@material-ui/core/Divider";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import { Carousel } from "react-bootstrap";


const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    overflowX: "hidden",
  },

  // videoAboutUs :{
  //   // position: 'absolute',
  //   width: "100%",
  //   height: '100%',

  // },
  title: {
    width: "100%",
    fontSize: 44,
    fontFamily: "Lato",
    marginBottom: "20px",
    flexGrow: "1",
    marginTop: "20px",
  },
  headingTitleItems: {
    border: "1px solid #E8E8E8",
    borderRadius: "5px",
    marginBottom: "32px",
    textAlign: "center",
    letterSpacing: "0.8px",
  },
  headingItemsColor: {
    color: "#7A7A7A",
  },
  imgSlide:{
    paddingTop :"50%",
    background: "black",
    backgroundImage:'url(../../assets/img/background-soft.png)'

  },

  content: {
    backgroundImage: "linear-gradient(180deg, #F7F6FB 34%, #FFFFFF00 100%)",
    maxWidth: "100%",
    fontFamily: "Lato",
    color: "#7A7A7A",
    height: "75vh",
  },

  iconContent: {
    color: "#13A549",
    borderRadius: "50px 50px 50px 50px",
    margin: "0px 0px 10px 0px",
    fontSize: "48px",
  },

  ourIntroductionContent: {
    width: "100%",
    height: "100vh",
    padding: "36px 36px",
    textAlign: "center",

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

  imgMeet: {
    "&>img": {
      width: "100%",
    },
    width: "40%",
    marginTop: "20px",
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function AboutPage() {
  const classes = styles();
  return (
    <section>
      <div>
      <div className={classes.imgSlide}>
      {/* <div className={classes.imgSlide}> */}
      <Carousel >
  <Carousel.Item style ={{backgroundImage:'url(../../assets/img/background-soft.png)'}}>
    {/* <img
      className="d-block w-100"
      src="./img/slide6.png"
      alt="First slide"
    /> */}
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/slide1.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/slide2.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>


      {/* </div> */}




<div>
      <Container className={classes.root} fixed>
        <div className={classes.title}>
          <div
            className="heading-title"
            style={{ width: "50%", float: "right", marginBottom: "32px" }}
          >
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                // sm={6}
                className={classes.headingTitleItems}
                style={{ marginTop: "24px" }}
              >
                <h2>Tầm Nhìn</h2>
                <Typography className={classes.headingItemsColor}>
                  {" "}
                  Chúng tôi Deliverra không ngừng đổi mới, sáng tạo tạo sản phẩm
                  dịch vụ tốt nhất, góp phần nâng cao chất lượng cuộc sống , gắn
                  kết người với con người .
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                // sm={6}
                className={classes.headingTitleItems}
                style={{ marginTop: "24px" }}
              >
                <h2>Nhiệm Vụ</h2>
                <Typography className={classes.headingItemsColor}>
                  Luôn cải tiến chất lượng sản phẩm đáp ứng nhu cầu của toàn
                  khách hàng khi sử dụng dịch vụ của chúng tôi.
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={classes.imgMeet} style={{ height: "100%" }}>
            <img src="../img/meet-800x914.png"></img>
          </div>
        </div>
      </Container>
      </div>

      <div className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Grid item xs style={{ textAlign: "center", margin: "120px 40px" }}>
              <div className={classes.iconContent}>
                <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
              </div>
              <h2>Giao Hàng Chuyên Nghiệp</h2>
              <Typography>Nhanh , chính xác , Nhiệt Tình</Typography>
            </Grid>
          </Grid>

          <Grid item xs>
            <Grid item xs style={{ textAlign: "center", margin: "120px 40px" }}>
              <div className={classes.iconContent}>
                <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
              </div>
              <h2>Giao Hàng Chuyên Nghiệp</h2>
              <Typography>Nhanh , chính xác , Nhiệt Tình</Typography>
            </Grid>
          </Grid>

          <Grid item xs>
            <Grid item xs style={{ textAlign: "center", margin: "120px 40px" }}>
              <div className={classes.iconContent}>
                <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
              </div>

              <h2>Giao Hàng Chuyên Nghiệp</h2>
              <Typography>Nhanh , chính xác , Nhiệt Tình</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className={classes.ourIntroductionContent}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className={classes.title} style={{ fontSize: "36px" }}>
              {" "}
              Ngồi Tại Nhà - Đơn Hàng Có Chúng Tôi Lo!
            </div>
            <div className="list-introduction-content">
              <List className="item-introduction-content">
                <ListItem>
                  <ListItemIcon style={{ textAlign: "center" }}>
                    <CheckOutlinedIcon
                      style={{ color: "#13a549", fontSize: "40px" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Theo dõi đơn hàng tại nhà"
                    style={{ fontSize: "24px", color: "unset" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{ textAlign: "center" }}>
                    <CheckOutlinedIcon
                      style={{ color: "#13a549", fontSize: "40px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Đặt Hàng Ở Bất Kì Đâu" />
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{ textAlign: "center" }}>
                    <CheckOutlinedIcon
                      style={{ color: "#13a549", fontSize: "40px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Nhận Thông Báo Từ Chúng Tôi" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div
              className={classes.imgShipper}
              style={{ width: "100%", height: "100vh" }}
            >
              <img
                src="./img/deliv.png"
                alt="shipper"
                style={{ width: "100%" }}
              />
            </div>
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
