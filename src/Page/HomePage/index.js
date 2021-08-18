import { Button } from '@material-ui/core';
import React from 'react'
import Styled from './HomePage.module.css';
import Container from '@material-ui/core/Container';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position:'relative',
        overflowX:"hidden"
    },
    imgShipper: {
        '&>img': {
            width: '100%'
        },
        width: '50%',
    },
    getStart: {
        width: '50%',
        marginRight:'40px',
    },
    title: {
        fontSize: 44,
        fontFamily: 'Lato',
        marginBottom:'20px',
        marginTop:"20px"
    },
    content: {
        fontSize: '16px',
        fontFamily:'Lato',
        color:'#7A7A7A',
        marginTop:'10px',
        marginRight:'30px'
    },
    action:{
        marginTop:'30px'
    },
    iconNext:{
        marginLeft:"10px",
    }
}));
const GetStartButton = withStyles((theme) => ({
    root: {
        color: 'white',
        fontFamily: "Lato-Black",
        textTransform: 'capitalize',
        borderRadius: '50px 50px 50px 50px',
        padding: '15px 35px 15px 35px',
        backgroundColor: theme.palette.green,
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.green,
            opacity:"0.8",
        },
    },
}))(Button);
export default function HomePage() {
    React.useEffect(()=>{

    },[]);
    const classes = useStyles();
    return (
        <section className={Styled.wrap}>
            <Container className={classes.root} fixed>
                <div className={classes.getStart}>
                    <div className={classes.title}>Chúng Tôi Giao Hàng Nhanh Chóng Chỉ Với 30 phút</div>
                    <div className={classes.content}>Chúng tôi là Deliverra là web cung cấp dịch vụ giao hàng trực tuyến cho khách hàng</div>
                    <div className={classes.action}>
                        <GetStartButton>Sử Dụng Dịch Vụ <NavigateNextIcon/> </GetStartButton>
                    </div>
                    <div className={classes.title}>Nếu Bạn Đang Cần Việc Làm ?</div>
                    <div className={classes.action}>
                        <GetStartButton>Trở Thành Đối Tác Với Chúng Tôi <NavigateNextIcon/> </GetStartButton>
                    </div>
                </div>
                <div className={classes.imgShipper}>
                    <img src='./img/deliv.png' alt='shipper' />
                </div>
            </Container>
        </section>
    )
}
